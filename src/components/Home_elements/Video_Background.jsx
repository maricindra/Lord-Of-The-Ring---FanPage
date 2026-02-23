function Video_Page() {
  return (
<div>
        <video
          autoPlay
          loop
          muted
          playsInline
          //  Use inset-0 to define the whole space without to show the black borders in the className of video.
          className="absolute inset-0 z-0 w-full h-full object-cover">
          <source src="/lordring_1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

</div>
  );
}

export default Video_Page;