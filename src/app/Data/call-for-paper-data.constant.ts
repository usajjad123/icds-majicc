import { ICallForPaper } from "../typing/client/call-for-paper-type";
import { MockDataProgramsLeft } from "./home-data.constant";

export const papersData: Array<ICallForPaper> = [
  {
    heading: "CALL FOR PAPERS",
    breif: `Mohammad Ali Jinnah University Conference on Informatics and Computing 2021 (MAJICC'21) is a conference for sharing knowledge about cutting edge research and applications of computer science. The conference will bring together researchers and practitioners from academia and industry to exchange their knowledge and discuss challenges and goals for computer science and related fields.
      The program of the conference will consist of paper presentations, poster presentations, system exhibition, doctoral colloquium, and invited talks. The theme of the conference is “Artificial Intelligence & Data Science”.
      The conference will be held online as well as on physical mode. However, physical mode will be confirmed one month before the conference date (depending on the COVID-19 situation). Online participation will always be welcomed.`.split("\n"),
    link: "https://easychair.org/conferences/?conf=majicc21",
    points: MockDataProgramsLeft,
    para: [
      "Papers are to be submitted in pdf format, no more than six pages in length excluding references. Please follow the given template for the the submission i.e.Word Template, Latex Template",
      "The review process will be double-blind, so authors are requested NOT to provide any names or contact details on the submitted paper. Authors will register at easychair to submit their papers, link will be updated soon.",
    ],
  },
  {
    heading: "System Exhibition",
    para: `Proposals for exhibition of products and/or libraries related to Data Science. The proposed demo can be an academic work as well as industrial solution. The developer(s) should present a 400 to 700 word abstract describing motivation, design, significance and innovation of the proposed demo. The screenshots of input/output can be appended to the abstract.
      Paper Submission Deadline: 8th May, 2021`.split("\n"),
    link: "https://majicc.jinnah.edu/#/call-for-paper",
  },
  {
    heading: "Doctoral Colloquium",
    para: `An opportunity for PhD scholars to present their doctoral thesis work related to Data Science and to interact with their colleagues as well as senior researchers and academia.
            The doctoral scholars should submit 2 page extended abstract (+ additional pages for references) describing thesis work (related to Data Science) and its current status.
            Paper Submission Deadline: 8th May, 2021`.split("\n"),
    link: "https://majicc.jinnah.edu/#/call-for-paper",
  },
];
