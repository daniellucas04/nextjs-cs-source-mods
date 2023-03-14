export default function Title({ text, className }) {
  return (
    <h1
      className={`text-center p-3 underline decoration-10-white text-60-dark dark:decoration-10-dark dark:text-60-white px-5 cursor-default text-4xl font-bold mt-10`}
    >
      {text}
    </h1>
  );
}
