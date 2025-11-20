import Slider from "@/components/swiper";
import SwiperComponent from "@/components/swiper-component";
import Image from "next/image";
import manOne from "@/../public/assets/images/man-1.jpg";
import manTwo from "@/../public/assets/images/man-2.jpg";
import manThree from "@/../public/assets/images/man-3.jpg";
import womanOne from "@/../public/assets/images/woman-1.jpg";
import womanTwo from "@/../public/assets/images/woman-2.jpg";
import womanThree from "@/../public/assets/images/woman-3.jpg";
function Clients() {
  const cards = [
    {
      title: "Exceptional Service!",
      description:
        "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      user: {
        image: manOne,
        alt: "man-1",
        name: "Wade Warren",
        location: "USA, California",
      },
    },
    {
      title: "Efficient and Reliable",
      description:
        "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      user: {
        image: womanOne,
        alt: "woman-1",
        name: "Emelie Thomson",
        location: "USA, Florida",
      },
    },
    {
      title: "Trusted Advisors",
      description:
        "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      user: {
        image: manTwo,
        alt: "man-2",
        name: "John Mans",
        location: "USA, Nevada",
      },
    },
    {
      title: "Smooth Process",
      description:
        "From start to finish, the process was seamless. Estatein made everything easy and stress-free. Great communication throughout.",
      user: {
        image: womanTwo,
        alt: "woman-2",
        name: "Sarah Collins",
        location: "USA, Texas",
      },
    },
    {
      title: "Highly Professional",
      description:
        "Very professional team! They understood our needs perfectly and helped us secure an amazing deal. Truly impressive service.",
      user: {
        image: manThree,
        alt: "man-3",
        name: "Michael Adams",
        location: "USA, New York",
      },
    },
    {
      title: "Great Support",
      description:
        "Estatein supported us at every step. Their expertise made the whole experience enjoyable and straightforward. We’re very satisfied.",
      user: {
        image: womanThree,
        alt: "woman-3",
        name: "Laura Bennett",
        location: "USA, Washington",
      },
    },
  ];

  return (
    <SwiperComponent
      header="What Our Clients Say"
      description={`Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.`}
      buttonText="View All Testimonials"
    >
      <Slider cards={cards} buttonText="View All Testimonials" id={2} />
    </SwiperComponent>
  );
}

export default Clients;
