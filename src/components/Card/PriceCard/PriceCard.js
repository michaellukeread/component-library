const PriceCard = ({ type, price, per }) => (
  <div>
    <p>{type}</p>
    <span>
      <h2>{price}</h2>
    </span>
  </div>
)

export default PriceCard
