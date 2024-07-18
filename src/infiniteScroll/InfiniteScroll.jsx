import { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = async () => {
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        fetchData();
      }
    };

    fetchData();

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const resp = await fetch('https://meme-api.com/gimme/5');
    const respData = await resp.json();

    setLoading(false);

    setData((memes) => [...memes, ...respData.memes]);
  };

  return (
    <>
      <h1 className="text-4xl font-bold">Images Gallery</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {data &&
          data?.map((memeData, idx) => (
            <div className="flex" key={idx}>
              <div>
                <img className="w-96 h-96 m-4" src={memeData?.url} />
              </div>
            </div>
          ))}
      </div>
      <div className="flex items-center justify-center">
        <ClipLoader size={150} loading={loading} />
      </div>
    </>
  );
};

export default InfiniteScroll;
