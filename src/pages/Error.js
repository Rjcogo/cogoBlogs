import React from "react";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>OOPS!! Sorry but you need to check the URL</h1>
        <Link to="/" className="btn btn-primary">
          Back home 
        </Link>
      </div>
    </section>
  );
}
