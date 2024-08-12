function Home() {
  return (
    <>
      <h1 style={{ marginBottom: "3em" }}>
        Se você estiver lendo isso, me envie um áudio imitando o áudio abaixo:
      </h1>
      <audio src="/audio.mp3" controls />
    </>
  );
}

export default Home;
