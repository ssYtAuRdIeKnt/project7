const programs = [
  {
    id: 1,
    title: "Цикл на силу (12 тижнів)",
    image: "/powlif_adv.png",
    description:
      "Силовий цикл для троєборця, який підійде атлетам рівнем КМС-МС, адже був протестований на спортсменах такого рівня і зарекомендував себе, як ефективний. Програма використовує хвильову періодизацію з поступовим зростанням інтенсивності тренувань. Цикл розрахований на людей, які мають високий рівень виконання вправ, тож допускаються деякі корегування в ході виконання цього мезоциклу. Спортсмен має мати хорошу розтяжку, кути та загальна техніка обов'язково мають бути на високому рівні.",
    category: "Досвідчений",
  },
  {
    id: 2,
    title: "Цикл на гіпертрофію (8 тижнів)",
    image: "/hypertr_mid.png",
    description:
      "Цей цикл на гіпертрофію розрахований на атлетів середнього рівня, які мають за мету ефективно збільшити м'язевий поперечник. Програма орієнтована на спортсменів, які мають досвід занять в залі 1-3 роки, дотримуючись режиму, правильного дозування навантажень та харчування, маючи бажання збільшити м'язеву масу. Цикл вибудований з використанням хвильової періодизації і системи 'фулбаді'. Перевага надається базовим вправам, проте є й ізолюючі, розраховані те що, щоб добрати навантаження окремими м'язовими групами.",
    category: "Середній",
  },
  {
    id: 3,
    title: "Цикл на силу (8 тижнів)",
    image: "/powlif_begin.png",
    description:
      "Силовий цикл для троєборця, розрахований для атлетів початкового рівня, які вже вже пройшли нашу програму для новачків в залі, а отже мають базове розуміння роботи в залі, проте все ще не мають високих силових результатів. Програма включає в себе напрацювання техніки виконання вправ станової тяги, присідань і жиму лежачи, роботу на збільшення м'язового об'єму та укріплення тіла ізоляційними вправами.",
    category: "Початковий",
  },
];

export default function ProgramList() {
  return (
    <div className="flex-1 bg-[#eeeeee] border-t-12 border-[#D0D0D0]">
      <div className="flex flex-col">
        {programs.map((program) => (
          <div
            key={program.id}
            className="group relative flex flex-col rounded-xl hover:shadow-lg mt-8 mx-4 md:mx-8 bg-white transition-shadow"
          >
            <h2 className="text-2xl font-semibold px-6 pt-6">{program.title}</h2>

            <span className="inline-block w-fit mt-2 text-sm text-[#666666] bg-[#e9e9e9] px-3 py-1 rounded ml-6">
              {program.category}
            </span>

            <div className="flex flex-col md:flex-row gap-6 md:gap-10 p-6 pt-4">
              <img
                src={program.image}
                alt={program.title}
                className="w-full md:w-60 h-60 object-cover rounded"
              />

              <p className="text-base font-thin text-black">
                {program.description}
              </p>
            </div>

            <a
              href={`/programs/${program.id}`}
              className="w-fit mt-4 mb-6 ml-6 md:mt-0 md:mb-0 md:ml-0 md:absolute md:bottom-4 md:right-6 bg-[#7B4B3A] text-white text-base px-5 py-2.5 rounded transition duration-300 ease-in-out md:opacity-0 md:scale-95 group-hover:opacity-100 group-hover:scale-100"
            >
              Читати далі
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
