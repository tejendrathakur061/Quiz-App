const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
      {icon}

      <h3 className="text-xl font-semibold mt-4">
        {title}
      </h3>

      <p className="text-gray-600 mt-3">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;