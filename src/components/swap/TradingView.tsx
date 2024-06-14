import React, { useEffect, useRef, memo } from "react";

interface TradingViewWidgetProps {
  // Define props if needed
}

const TradingViewWidget: React.FC<TradingViewWidgetProps> = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "NASDAQ:AAPL",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "hide_top_toolbar": true,

        "style": "1",
        "locale": "en",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      }`;
    if (container.current) {
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container " ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      
    </div>
  );
};

export default memo(TradingViewWidget);
