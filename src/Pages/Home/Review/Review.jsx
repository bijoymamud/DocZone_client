import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";


const Review = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 2,
      spacing: 15,
    },
  });



  return (
    <section className="pb-28">
      <div className="container w-full md:w-5/6 mx-auto text-center md:py-20">
        <div className="pb-16">
          <h2 className="text-4xl font-extrabold">Reviewing for a Brighter Tomorrow</h2>
          <p className="pt-2 text-md text-gray-500">Where Your Opinion Matters Most: Our Customer Reviews Speak Louder!</p>
        </div>
        <div ref={sliderRef} className="keen-slider  ">
          <div className="keen-slider__slide  number-slide1">

            <div className="bg-stone-100 rounded-lg shadow-md p-6">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="Customer Avatar"
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-700">
                "Ut posuere mi vitae ante lacinia aliquam. Duis suscipit nunc euismod,
                tristique neque et, ultricies justo."
              </p>
            </div>
          </div>

          <div className="keen-slider__slide number-slide2">

            <div className="bg-stone-100 rounded-lg shadow-md p-6">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                alt="Customer Avatar"
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-700">
                "Ut posuere mi vitae ante lacinia aliquam. Duis suscipit nunc euismod,
                tristique neque et, ultricies justo."
              </p>
            </div>

          </div>

          <div className="keen-slider__slide number-slide3">
            <div className="bg-stone-100 rounded-lg shadow-md p-6">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="Customer Avatar"
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-700">
                "Ut posuere mi vitae ante lacinia aliquam. Duis suscipit nunc euismod,
                tristique neque et, ultricies justo."
              </p>
            </div>
          </div>

          <div className="keen-slider__slide number-slide4">
            <div className="bg-stone-100 rounded-lg shadow-md p-6">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                alt="Customer Avatar"
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-700">
                "Ut posuere mi vitae ante lacinia aliquam. Duis suscipit nunc euismod,
                tristique neque et, ultricies justo."
              </p>
            </div>
          </div>

          <div className="keen-slider__slide number-slide5">
            <div className="bg-stone-100 rounded-lg shadow-md p-6">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                alt="Customer Avatar"
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-700">
                "Ut posuere mi vitae ante lacinia aliquam. Duis suscipit nunc euismod,
                tristique neque et, ultricies justo."
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Review;