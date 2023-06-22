export const Statistics = ({ total, positivePercentage, data }) => {
  return (
    <div>
      <ul>
        {Object.entries(data).map(([key, value]) => {
          return (
            <li key={crypto.randomUUID()}>
              {key}: {value}
            </li>
          );
        })}
      </ul>
      <p>Total: {total}</p>
      <p>Positive Feedbacks: {positivePercentage}%</p>
    </div>
  );
};
