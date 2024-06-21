

const Grounds = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Available Futsal Grounds</h2>
      {/* Add logic to fetch and display available futsal grounds */}
      <FutsalGround name="Ground 1" location="Location 1" />
      <FutsalGround name="Ground 2" location="Location 2" />
    </div>
  );
};

export default Grounds;
