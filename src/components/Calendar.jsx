import React, { useState, useEffect } from "react";
import ScrollingText from "./ScrollingText";

function DateTime() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {currentDateTime.toLocaleString("en-US", {
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      })}
    </div>
  );
}

export default function Calendar() {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="max-w-sm w-full">
        <div className="md:p-8 p-5 mb-6 bg-white rounded-xl border-purple border">
          <div className="px-4">
            <span
              tabindex="0"
              className="focus:outline-none text-center text-xl font-bold text-purple"
            >
              <DateTime />
            </span>
          </div>
          <div class="flex items-center justify-between pt-12 overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr>
                  <th>
                    <div class="w-full flex justify-center">
                      <p class="text-sm font-light text-center text-gray-800 dark:text-gray-100">
                        Mon
                      </p>
                    </div>
                  </th>
                  <th>
                    <div class="w-full flex justify-center">
                      <p class="text-sm font-light text-center text-gray-800 dark:text-gray-100">
                        Tue
                      </p>
                    </div>
                  </th>
                  <th>
                    <div class="w-full flex justify-center">
                      <p class="text-sm font-light text-center text-gray-800 dark:text-gray-100">
                        Wed
                      </p>
                    </div>
                  </th>
                  <th>
                    <div class="w-full flex justify-center">
                      <p class="text-sm font-light text-center text-gray-800 dark:text-gray-100">
                        Thu
                      </p>
                    </div>
                  </th>
                  <th>
                    <div class="w-full flex justify-center">
                      <p class="text-sm font-light text-center text-gray-800 dark:text-gray-100">
                        Fri
                      </p>
                    </div>
                  </th>
                  <th>
                    <div class="w-full flex justify-center">
                      <p class="text-sm font-light text-center text-gray-800 dark:text-gray-100">
                        Sat
                      </p>
                    </div>
                  </th>
                  <th>
                    <div class="w-full flex justify-center">
                      <p class="text-sm font-light text-center text-gray-800 dark:text-gray-100">
                        Sun
                      </p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="pt-6">
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                  </td>
                  <td class="pt-6">
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                  </td>
                  <td class="pt-6">
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        1
                      </p>
                    </div>
                  </td>
                  <td class="pt-6">
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        2
                      </p>
                    </div>
                  </td>
                  <td class="pt-6">
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100">
                        3
                      </p>
                    </div>
                  </td>
                  <td class="pt-6">
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100">
                        4
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        5
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        6
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        7
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="w-full h-full">
                      <div class="flex items-center justify-center w-full rounded-full cursor-pointer">
                        <a
                          role="link"
                          tabindex="0"
                          class="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-purple rounded-full"
                        >
                          8
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        9
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100">
                        10
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100">
                        11
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        12
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        13
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        14
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        15
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        16
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100">
                        17
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100">
                        18
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        19
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        20
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        21
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        22
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        23
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100">
                        24
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100">
                        25
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        26
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        27
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        28
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        29
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        30
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="p-4 rounded-xl border border-purple">
          <div class="flex gap-3 flex-col px-2">
            <h2 className="text-purple text-xl font-bold mb-4">
              Announcement Board
            </h2>
            <div className="grid gap-2 grid-cols-6 border border-light-purple w-full rounded-xl p-2">
              <img
                className="w-full col-span-1 aspect-square"
                src="/Left.png"
              />
              <div className="flex flex-col col-span-5 justify-center">
                <ScrollingText text="Notice of Special Examination of Spring Semester 2023" />
                <h6 className="mb-2 text-xs font-bold tracking-tight text-purple">
                  Artem Artemyev
                </h6>
              </div>
            </div>
            <div className="grid gap-2 grid-cols-6 border border-light-purple w-full rounded-xl p-2">
              <img
                className="w-full col-span-1 aspect-square"
                src="/Right.png"
              />
              <div className="flex flex-col col-span-5 justify-center">
                <ScrollingText text="Time Extension Notice of Semester Admission " />
                <h6 className="mb-2 text-xs font-bold tracking-tight text-purple">
                  Artem Artemyev
                </h6>
              </div>
            </div>
            <div className="grid gap-2 grid-cols-6 border border-light-purple w-full rounded-xl p-2">
              <img
                className="w-full col-span-1 aspect-square"
                src="/Left.png"
              />
              <div className="flex flex-col col-span-5 justify-center">
                <ScrollingText text="Notice of Special Examination of Spring Semester 2023" />
                <h6 className="mb-2 text-xs font-bold tracking-tight text-purple">
                  Artem Artemyev
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
