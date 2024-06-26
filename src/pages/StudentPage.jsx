import { useEffect, useState } from "react";
import Calendar from "../components/Calendar";
import { Link } from "react-router-dom";
function shuffleArray(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
export default function StudentPage() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const initialSubjects = [
      { name: "Math" },
      { name: "Science" },
      { name: "Turkish" },
      { name: "Art" },
      { name: "History" },
      { name: "Geography" },
      { name: "Music" },
      { name: "Reading" },
      { name: "PE" },
      { name: "Geometry" },
      { name: "Literature" },
    ];

    // Shuffle and slice the array to get only 4 random subjects
    setSubjects(shuffleArray([...initialSubjects]).slice(0, 4));
  }, []);

  return (
    <section className="grid grid-cols-4 m-8">
      <div className="col-span-1">
        <Calendar />
      </div>
      <div className="col-span-3">
        <h3 className="text-center mb-8 text-purple uppercase">
          Suggested Content
        </h3>
        <Link to="/lesson-page">
          <div className="border-b border-light-purple pb-8 flex justify-center gap-16">
            {subjects.map((subject, index) => (
              <div
                key={subject.name}
                className={`p-6 ${
                  index % 2 === 0 ? "bg-purple" : "bg-dark-purple"
                } text-white uppercase rounded-xl h-40 w-40 flex flex-col items-center justify-center hover:bg-light-purple`}
              >
                <div className="w-12 h-12 font-bold text-2xl text-purple bg-white rounded-full flex items-center justify-center">
                  +
                </div>
                <div className="text-2xl font-bold">{subject.name}</div>
              </div>
            ))}
          </div>
        </Link>
        <div className="flex">
          <div className="flex flex-1 flex-col m-4 p-4 rounded-xl border border-purple">
            <h2 className="text-purple text-lg font-bold mb-4">
              Upcoming Lessons
            </h2>
            <table className="w-full">
              <thead className="mb-4">
                <tr className="text-sm text-purple">
                  <th scope="col" className="font-light">
                    Course
                  </th>
                  <th scope="col" className="font-light">
                    Instructor
                  </th>
                  <th scope="col" className="font-light">
                    Timeslot
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-light-purple text-sm text-purple hover:bg-light-purple">
                  <th
                    scope="row"
                    class="flex items-center px-6 py-4 whitespace-nowrap dark:text-white"
                  >
                    <h2 class="w-10 h-10 text-xl rounded-full bg-purple flex items-center justify-center">
                      M
                    </h2>
                    <div class="p-2 text-purple font-semibold">Math</div>
                  </th>
                  <td class="px-6 py-4">Sude Çeper</td>
                  <td class="px-6 py-4 font-bold">18.04, 15:00</td>
                </tr>
                <tr class="border-b border-light-purple text-sm text-purple hover:bg-light-purple">
                  <th
                    scope="row"
                    class="flex items-center px-6 py-4 whitespace-nowrap dark:text-white"
                  >
                    <h2 class="w-10 h-10 text-xl rounded-full bg-purple flex items-center justify-center">
                      L
                    </h2>
                    <div class="p-2 text-purple font-semibold">Language</div>
                  </th>
                  <td class="px-6 py-4">Lulwa Al Adjani</td>
                  <td class="px-6 py-4 font-bold">18.04, 16:00</td>
                </tr>
                <tr class="border-b border-light-purple text-sm text-purple hover:bg-light-purple">
                  <th
                    scope="row"
                    class="flex items-center px-6 py-4 whitespace-nowrap dark:text-white"
                  >
                    <h2 class="w-10 h-10 text-xl rounded-full bg-purple flex items-center justify-center">
                      Sc
                    </h2>
                    <div class="p-2 text-purple font-semibold">Science</div>
                  </th>
                  <td class="px-6 py-4">Mohammed Taleb</td>
                  <td class="px-6 py-4 font-bold">18.04, 17:00</td>
                </tr>
                <tr class="border-b border-light-purple text-sm text-purple hover:bg-light-purple">
                  <th
                    scope="row"
                    class="flex items-center px-6 py-4 whitespace-nowrap dark:text-white"
                  >
                    <h2 class="w-10 h-10 text-xl rounded-full bg-purple flex items-center justify-center">
                      L
                    </h2>
                    <div class="p-2 text-purple font-semibold">Literature</div>
                  </th>
                  <td class="px-6 py-4">Saed Herbawi</td>
                  <td class="px-6 py-4 font-bold">18.04, 18:00</td>
                </tr>
                <tr class="border-b border-light-purple text-sm text-purple hover:bg-light-purple">
                  <th
                    scope="row"
                    class="flex items-center px-6 py-4 whitespace-nowrap dark:text-white"
                  >
                    <h2 class="w-10 h-10 text-xl rounded-full bg-purple flex items-center justify-center">
                      A
                    </h2>
                    <div class="p-2 text-purple font-semibold">Art/PE</div>
                  </th>
                  <td class="px-6 py-4">Artem Artemyev</td>
                  <td class="px-6 py-4 font-bold">18.04, 19:00</td>
                </tr>
              </tbody>
            </table>
            <button className="my-2 bg-purple text-sm text-white rounded-full">
              See More
            </button>
          </div>
          <div className="flex flex-1 flex-col m-4 p-4 rounded-xl border border-purple">
            <h2 className="text-purple text-lg font-bold mb-4">
              Upcoming Meetings
            </h2>
            <table className="w-full">
              <thead className="mb-4">
                <tr className="text-sm text-purple">
                  <th scope="col" className="font-light">
                    Course
                  </th>
                  <th scope="col" className="font-light">
                    Instructor
                  </th>
                  <th scope="col" className="font-light">
                    Timeslot
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-light-purple text-sm text-purple hover:bg-light-purple">
                  <th
                    scope="row"
                    class="flex items-center px-6 py-4 whitespace-nowrap dark:text-white"
                  >
                    <h2 class="w-10 h-10 text-xl rounded-full bg-purple flex items-center justify-center">
                      M
                    </h2>
                    <div class="p-2 text-purple font-semibold">Math</div>
                  </th>
                  <td class="px-6 py-4">Sude Çeper</td>
                  <td class="px-6 py-4 font-bold">18.04, 15:00</td>
                </tr>
                <tr class="border-b border-light-purple text-sm text-purple hover:bg-light-purple">
                  <th
                    scope="row"
                    class="flex items-center px-6 py-4 whitespace-nowrap dark:text-white"
                  >
                    <h2 class="w-10 h-10 text-xl rounded-full bg-purple flex items-center justify-center">
                      L
                    </h2>
                    <div class="p-2 text-purple font-semibold">Language</div>
                  </th>
                  <td class="px-6 py-4">Lulwa Al Adjani</td>
                  <td class="px-6 py-4 font-bold">18.04, 16:00</td>
                </tr>
                <tr class="border-b border-light-purple text-sm text-purple hover:bg-light-purple">
                  <th
                    scope="row"
                    class="flex items-center px-6 py-4 whitespace-nowrap dark:text-white"
                  >
                    <h2 class="w-10 h-10 text-xl rounded-full bg-purple flex items-center justify-center">
                      Sc
                    </h2>
                    <div class="p-2 text-purple font-semibold">Science</div>
                  </th>
                  <td class="px-6 py-4">Mohammed Taleb</td>
                  <td class="px-6 py-4 font-bold">18.04, 17:00</td>
                </tr>
                <tr class="border-b border-light-purple text-sm text-purple hover:bg-light-purple">
                  <th
                    scope="row"
                    class="flex items-center px-6 py-4 whitespace-nowrap dark:text-white"
                  >
                    <h2 class="w-10 h-10 text-xl rounded-full bg-purple flex items-center justify-center">
                      L
                    </h2>
                    <div class="p-2 text-purple font-semibold">Literature</div>
                  </th>
                  <td class="px-6 py-4">Saed Herbawi</td>
                  <td class="px-6 py-4 font-bold">18.04, 18:00</td>
                </tr>
              </tbody>
            </table>
            <button className="my-2 bg-purple text-sm text-white rounded-full">
              See More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
