import Link from 'next/link'

const Error404: React.FC = () => {
  return (
    <div>
      <h1>Oops, that's a 404. 🙈</h1>
      <p>
        Looks like this page doesn't exist. <Link  href="/"><a>Return home</a></Link> to get a
        fresh start.
      </p>
    </div>
  );
}

export default Error404;