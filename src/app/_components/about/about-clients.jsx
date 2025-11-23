import Slider from "@/components/swiper";
import SwiperComponent from "@/components/swiper-component";

function AboutClients() {
  const cards = [
    {
      date: "2019",
      title: "ABC Corporation",
      domain: "Commercial Real Estate",
      category: "Luxury Home Development",
      comment:
        "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    },
    {
      date: "2019",
      title: "ABC Corporation",
      domain: "Commercial Real Estate",
      category: "Luxury Home Development",
      comment:
        "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    },
    {
      date: "2020",
      title: "Global Tech Solutions",
      domain: "Technology Offices",
      category: "Corporate HQ Acquisition",
      comment:
        "Estatein provided us with exceptional market insights that helped us secure our new headquarters efficiently and within budget.",
    },
    {
      date: "2021",
      title: "Horizon Logistics",
      domain: "Industrial Real Estate",
      category: "Warehouse Expansion",
      comment:
        "Their team identified prime warehouse locations that significantly improved our distribution network performance.",
    },
    {
      date: "2022",
      title: "Luxury Living Group",
      domain: "Residential Real Estate",
      category: "High-End Villa Development",
      comment:
        "Estatein delivered unparalleled service in sourcing premium land plots that aligned perfectly with our luxury standards.",
    },
    {
      date: "2023",
      title: "Medicare Plus",
      domain: "Healthcare Real Estate",
      category: "Medical Facility Construction",
      comment:
        "The guidance we received from Estatein streamlined our expansion plans and ensured compliance with all regulatory requirements.",
    },
    {
      date: "2024",
      title: "GreenFuture Energy",
      domain: "Sustainable Real Estate",
      category: "Eco-Friendly Office Park",
      comment:
        "Working with Estatein allowed us to find a location that matched both our operational needs and sustainability goals.",
    },
  ];

  return (
    <SwiperComponent
      header="Our Valued Clients"
      description="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
    >
      <Slider cards={cards} id={4} />
    </SwiperComponent>
  );
}

export default AboutClients;
