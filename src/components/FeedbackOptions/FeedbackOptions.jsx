export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {Object.keys(options).map(btn => {
        return (
          <button
            key={btn}
            type="button"
            onClick={() => {
              onLeaveFeedback(btn);
            }}
          >
            {btn}
          </button>
        );
      })}
    </>
  );
};
