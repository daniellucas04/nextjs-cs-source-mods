export default function Subtitle({ title }) {
  return (
    <h2 className="text-3xl mb-4 tracking-wider underline decoration-10-white text-60-dark dark:decoration-10-dark dark:text-60-white ml-10 bg-secondary w-fit p-1 px-5 cursor-default">
      {title}
    </h2>
  );
}
