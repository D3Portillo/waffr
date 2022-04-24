function Card({ children }) {
  return (
    <div className="bg-zinc-900 flex space-y-4 flex-col max-w-3xl mx-auto p-8 rounded-lg">
      {children}
    </div>
  );
}

Card.defaultProps = {
  children: null,
};

export default Card;
