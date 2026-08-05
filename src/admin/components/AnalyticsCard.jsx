export default function AnalyticsCard({
  title,
  value,
  subtitle,
  icon,
}) {

  return (

    <div className="
      bg-white
      rounded-2xl
      shadow
      p-6
      border
    ">

      <div className="
        flex
        justify-between
        items-center
      ">

        <div>

          <p className="text-gray-500">
            {title}
          </p>


          <h2 className="
            text-3xl
            font-bold
            mt-2
          ">
            {value}
          </h2>


          <p className="
            text-sm
            text-gray-400
            mt-2
          ">
            {subtitle}
          </p>

        </div>


        <div className="
          text-green-700
          text-4xl
        ">
          {icon}
        </div>


      </div>


    </div>

  );
}