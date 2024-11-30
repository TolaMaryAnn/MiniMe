import Image from "next/image";
import img1 from "../Assets/Images/boy-5307219_1280.jpg";
import img2 from "../Assets/Images/child-3045207_1280.jpg";
import img3 from "../Assets/Images/girl-1839623_1280.jpg";

const PhotoMix = () => {
  return (
    <section className="py-10 bg-pink-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          {/* Left: Large Image */}
          <div className="sm:col-span-2">
            <div className="w-full h-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src={img1}
                alt="Large Display"
                width={800}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right: Two Smaller Images */}
          <div className="grid grid-rows-2 gap-4 h-full">
            {/* Top Small Image */}
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={img2}
                alt="Small Display 1"
                width={400}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Bottom Small Image */}
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={img3}
                alt="Small Display 2"
                width={400}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoMix;