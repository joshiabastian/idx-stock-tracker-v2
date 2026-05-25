CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Database schema for stock data, indicators, news, AI analysis, and reports

CREATE TABLE IF NOT EXISTS ohlcv_data (
    id          BIGSERIAL PRIMARY KEY,
    ticker      VARCHAR(20) NOT NULL,
    date        DATE NOT NULL,
    open        NUMERIC(18, 4) NOT NULL,
    high        NUMERIC(18, 4) NOT NULL,
    low         NUMERIC(18, 4) NOT NULL,
    close       NUMERIC(18, 4) NOT NULL,
    adj_close   NUMERIC(18, 4),
    volume      BIGINT NOT NULL,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_ohlcv_ticker_date UNIQUE (ticker, date)
);

CREATE TABLE IF NOT EXISTS indicators (
    id          BIGSERIAL PRIMARY KEY,
    ticker      VARCHAR(20) NOT NULL,
    date        DATE NOT NULL,
    ema20       NUMERIC(18, 4),
    ema50       NUMERIC(18, 4),
    rsi         NUMERIC(8, 4),
    macd        NUMERIC(18, 6),
    macd_signal NUMERIC(18, 6),
    macd_hist   NUMERIC(18, 6),
    atr         NUMERIC(18, 4),
    vwap        NUMERIC(18, 4),
    volume_ma   NUMERIC(20, 2),
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_indicators_ticker_date UNIQUE (ticker, date)
);

CREATE TABLE IF NOT EXISTS news (
    id             BIGSERIAL PRIMARY KEY,
    ticker         VARCHAR(20) NOT NULL,
    title          TEXT NOT NULL,
    url            TEXT NOT NULL,
    published_date TIMESTAMPTZ,
    source         VARCHAR(255),
    is_used        BOOLEAN NOT NULL DEFAULT FALSE,
    fetched_date   DATE NOT NULL DEFAULT CURRENT_DATE,
    created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_news_url UNIQUE (url)
);

CREATE TABLE IF NOT EXISTS ai_analysis (
    id              BIGSERIAL PRIMARY KEY,
    ticker          VARCHAR(20) NOT NULL,
    date            DATE NOT NULL,
    sentiment_score NUMERIC(4, 2),
    summary         TEXT,
    risk_notes      TEXT,
    raw_response    JSONB,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_ai_analysis_ticker_date UNIQUE (ticker, date)
);

CREATE TABLE IF NOT EXISTS reports (
    id          BIGSERIAL PRIMARY KEY,
    user_id     BIGINT NOT NULL,
    date        DATE NOT NULL,
    pdf_url     TEXT,
    status      VARCHAR(20) NOT NULL DEFAULT 'pending',
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_reports_user_date UNIQUE (user_id, date)
);

CREATE TABLE IF NOT EXISTS pipeline_logs (
    id           BIGSERIAL PRIMARY KEY,
    run_id       UUID NOT NULL DEFAULT uuid_generate_v4(),
    stage        VARCHAR(50) NOT NULL,
    status       VARCHAR(20) NOT NULL,
    ticker       VARCHAR(20),
    message      TEXT,
    error_detail TEXT,
    created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);