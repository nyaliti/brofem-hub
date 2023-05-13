/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable object-curly-spacing */
/* eslint-disable no-unused-vars */
import React from 'react';

class ErrorBoundary extends React.Component {
  /**
   * Constructs a new ErrorBoundary component.
   * @param {object} props - The component props.
   */
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  /**
   * Catches errors thrown by child components.
   * @param {Error} error - The caught error.
   * @param {object} errorInfo - Additional information about the error.
   */
  componentDidCatch(error, errorInfo) {
    // Handle the error or log it
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);

    // Update state to indicate that an error has occurred
    this.setState({ hasError: true });
  }

  /**
   * Renders the component.
   * @return {JSX.Element} - Rendered component.
   */
  render() {
    if (this.state.hasError) {
      // You can render a fallback UI here
      return <h1>Something went wrong.</h1>;
    }

    // Render the child components
    return this.props.children;
  }
}

export default ErrorBoundary;
