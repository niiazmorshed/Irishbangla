import { Component } from "react";
import { Link } from "react-router-dom";

export default class RouteErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Route render error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="route-error">
          <p className="route-error-kicker">Something went wrong</p>
          <h1 className="route-error-title">This page could not be loaded</h1>
          <p className="route-error-copy">
            An unexpected error occurred while rendering this page. Try refreshing, or return to the home page.
          </p>
          <div className="route-error-actions">
            <button
              type="button"
              className="route-error-btn"
              onClick={() => window.location.reload()}
            >
              Refresh page
            </button>
            <Link to="/" className="route-error-btn route-error-btn--primary">
              Return home
            </Link>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
