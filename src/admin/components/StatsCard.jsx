export default function StatsCard({
  title,
  value,
  color,
  icon
}) {

  return (
    <div
      className={`${color} text-white rounded-2xl shadow-lg p-6`}
    >

      <div className="flex justify-between items-center">

        <div>

          <p className="text-sm opacity-90">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {value}
          </h2>

        </div>


        <div className="text-4xl opacity-80">
          {icon}
        </div>

      </div>

    </div>
  );
}