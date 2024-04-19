const date = new Date();

const formatDate = (year: any, month: any, day: any) => {
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(
    2,
    '0',
  )}`;
};

const thisWeekStart = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate() - 6,
);
const thisWeekEnd = date;

const lastWeekStart = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate() - 13,
);
const lastWeekEnd = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate() - 7,
);

const twoWeeksAgoStart = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate() - 20,
);
const twoWeeksAgoEnd = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate() - 14,
);

const threeWeeksAgoStart = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate() - 27,
);
const threeWeeksAgoEnd = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate() - 21,
);

const thisWeekRange = `${formatDate(
  thisWeekStart.getFullYear(),
  thisWeekStart.getMonth() + 1,
  thisWeekStart.getDate(),
)}\n~${formatDate(
  thisWeekEnd.getFullYear(),
  thisWeekEnd.getMonth() + 1,
  thisWeekEnd.getDate(),
)}`;
const lastWeekRange = `${formatDate(
  lastWeekStart.getFullYear(),
  lastWeekStart.getMonth() + 1,
  lastWeekStart.getDate(),
)}\n~${formatDate(
  lastWeekEnd.getFullYear(),
  lastWeekEnd.getMonth() + 1,
  lastWeekEnd.getDate(),
)}`;
const twoWeeksAgoRange = `${formatDate(
  twoWeeksAgoStart.getFullYear(),
  twoWeeksAgoStart.getMonth() + 1,
  twoWeeksAgoStart.getDate(),
)}\n~${formatDate(
  twoWeeksAgoEnd.getFullYear(),
  twoWeeksAgoEnd.getMonth() + 1,
  twoWeeksAgoEnd.getDate(),
)}`;
const threeWeeksAgoRange = `${formatDate(
  threeWeeksAgoStart.getFullYear(),
  threeWeeksAgoStart.getMonth() + 1,
  threeWeeksAgoStart.getDate(),
)}\n~${formatDate(
  threeWeeksAgoEnd.getFullYear(),
  threeWeeksAgoEnd.getMonth() + 1,
  threeWeeksAgoEnd.getDate(),
)}`;

export const rangeLabels = [
  thisWeekRange,
  lastWeekRange,
  twoWeeksAgoRange,
  threeWeeksAgoRange,
];

export const visitorData = {
  resultList: {
    total: [1078, 1604, 1873, 2425],
  },
};


export const models = {
  resultList: [
    {
      name: "modelA",
      weight: 120,
      cost: 80,
      zoom: 30,
    },
    {
      name: "modelB",
      weight: 180,
      cost: 120,
      zoom: 50,
    },
  ],
};



const modelA = models.resultList.find((item) => item.name === "modelA");
const modelB = models.resultList.find((item) => item.name === "modelB");

export const modelData = [
  {
    type: "bar",
    data: [modelA?.weight, modelA?.cost, modelA?.zoom],
  },
  {
    type: "bar",
    data: [modelB?.weight, modelB?.cost, modelB?.zoom],
  },
]



export const hobbyData = {
  resultList: [
    {
      name: "운동",
      count: 35,
    },
    {
      name: "독서",
      count: 13,
    },
    {
      name: "영화보기",
      count: 38,
    },
    {
      name: "여행하기",
      count: 21,
    },
    {
      name: "맛집탐방",
      count: 22,
    },
    {
      name: "기타",
      count: 39,
    },
  ],
};