export default function Author() {
    return (
      <div className="flex-1 bg-[#eeeeee] border-t-12 border-[#D0D0D0]">
        <div className="relative rounded-xl mt-8 mx-4 md:mx-8 bg-white p-6 md:p-8 text-gray-800 text-[17px] leading-relaxed">
          <h1 className="text-3xl font-bold mb-8">Про автора</h1>
  
          <div className="md:hidden flex justify-center mb-6">
            <img
              src="author.jpg"
              alt="Фото автора"
              className="w-48 h-48 object-cover rounded-xl shadow"
            />
          </div>
  
          <img
            src="author.jpg"
            alt="Фото автора"
            className="hidden md:block w-60 h-60 object-cover rounded-xl shadow mb-4 ml-8 float-right"
          />
  
          <div className="clear-none">
            <p className="mb-4">
              Вітаю! Мене звати Ярослав, я засновник <strong>GymCycles</strong> і фахівець у сфері силових тренувань.
            </p>
  
            <p className="mb-4">
              За плечами маю 8 підопічних, які під моїм наставництвом вдало спрогресували або прогресують у силових видах спорту.
            </p>
  
            <p className="mb-4">
              Матеріали, які знаходяться на цьому сайті, як і сам сайт, є моєю розробкою.
            </p>
  
            <div className="mb-4">
              <p className="font-semibold mb-2">Мої регалії в 17 років:</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>КМС з жиму лежачи</li>
                <li>КМС зі станової тяги</li>
                <li>I розряд з присяду</li>
                <li>КМС зі строгого підйому на біцепс</li>
              </ul>
            </div>
  
            <p>
              З питаннями щодо циклів:{" "}
              <a
                href="mailto:yaroslav.kalinichenko@auk.edu.ua"
                className="text-[#4E342E] underline hover:text-[#7B4B3A] transition-colors"
              >
                yaroslav.kalinichenko@auk.edu.ua
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
  