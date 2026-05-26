import logging
import logging.handlers
import json
import os
from datetime import datetime
from src.config.settings import ENV


class JSONFormatter(logging.Formatter):
    def format(self, record):
        log_obj = {
            "timestamp": datetime.utcnow().isoformat(),
            "level": record.levelname,
            "logger": record.name,
            "message": record.getMessage(),
        }
        if hasattr(record, "run_id"):
            log_obj["run_id"] = record.run_id
        if hasattr(record, "ticker"):
            log_obj["ticker"] = record.ticker
        if record.exc_info:
            log_obj["exception"] = self.formatException(record.exc_info)
        return json.dumps(log_obj)


class ContextAdapter(logging.LoggerAdapter):
    def process(self, msg, kwargs):
        extra = kwargs.get("extra", {})
        extra.update(self.extra)
        kwargs["extra"] = extra
        return msg, kwargs


def get_logger(name: str, run_id: str = None, ticker: str = None) -> ContextAdapter:
    logger = logging.getLogger(name)

    if not logger.handlers:
        logger.setLevel(logging.DEBUG if ENV == "development" else logging.INFO)

        if ENV == "development":
            formatter = logging.Formatter(
                "%(asctime)s [%(levelname)s] %(name)s - %(message)s",
                datefmt="%Y-%m-%d %H:%M:%S",
            )
        else:
            formatter = JSONFormatter()

        # stdout
        stream_handler = logging.StreamHandler()
        stream_handler.setFormatter(formatter)
        logger.addHandler(stream_handler)

        # file dengan rotation
        os.makedirs("/app/logs", exist_ok=True)
        file_handler = logging.handlers.RotatingFileHandler(
            "/app/logs/worker.log", maxBytes=10 * 1024 * 1024, backupCount=5  # 10MB
        )
        file_handler.setFormatter(formatter)
        logger.addHandler(file_handler)

    context = {}
    if run_id:
        context["run_id"] = run_id
    if ticker:
        context["ticker"] = ticker

    return ContextAdapter(logger, context)
