const MapPractice = () => {
  const cars = ["Tata", "Mahindra", "Honda", "Toyota"];
  return (
    <div className="App">
      <h1>Practice</h1>
      {cars.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};

export default MapPractice;
