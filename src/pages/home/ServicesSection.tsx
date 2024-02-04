import Container from "@/components/Container";
import BatteryReplacement from "@/components/ServiceTitles/BatteryReplacement";
import ChipsetReplacement from "@/components/ServiceTitles/ChipsetReplacement";
import DataRecovery from "@/components/ServiceTitles/DataRecovery";
import StorageReplacement from "@/components/ServiceTitles/StorageReplacement";

const ServicesSection = () => {
  return (
    <Container className="my-40">
      <div className="text-center">
        <h1>Services that we provide.</h1>
        <p className="max-w-[80ch] mt-10 mb-20 mx-auto">
          All our technicians are fully qualified and licensed. Moreover,
          theyare incredibly skillful and proficient in various aspects of
          computer repair.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <BatteryReplacement />
        <ChipsetReplacement />
        <DataRecovery />
        <StorageReplacement />
        <div className="bg-red-600 h-32 col-span-12 md:col-span-6 lg:col-span-4"></div>
        <div className="bg-red-600 h-32 col-span-12 md:col-span-6 lg:col-span-4"></div>
        <div className="bg-red-600 h-32 col-span-12 lg:col-span-4"></div>
      </div>
    </Container>
  );
};

export default ServicesSection;
