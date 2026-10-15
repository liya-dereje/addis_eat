import PropTypes from "prop-types";

function Card({ children }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "16px", margin: "12px 0", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired
};

export default Card;
