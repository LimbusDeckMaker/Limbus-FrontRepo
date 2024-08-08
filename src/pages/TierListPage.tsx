import TierTable from "@components/Tier/TierTable";

const TierListPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-primary-100 font-sans">
        3성 티어표
      </h1>
      <TierTable />
    </div>
  );
};

export default TierListPage;
