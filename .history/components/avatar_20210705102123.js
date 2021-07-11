function avatar({ url = "https://cutt.ly/rml9g1m" }) {
  return (
    <img
      loading="lazy"
      className="h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110"
      src={url}
      alt="profile pic"
    />
  );
}

export default avatar;
