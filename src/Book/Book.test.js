import React from "react";
import ReactDOM from "react-dom";
import Book from "./Book";

const aBook = {
  kind: "books#volume",
  id: "Tg_QAgAAQBAJ",
  etag: "VvD2OAyhc+0",
  selfLink: "https://www.googleapis.com/books/v1/volumes/Tg_QAgAAQBAJ",
  volumeInfo: {
    title: "Brazilian Jiu-Jitsu",
    subtitle:
      "The Ultimate Guide to Dominating Brazilian Jiu-Jitsu and Mixed Martial Arts Combat",
    authors: ["Alexandre Paiva"],
    publisher: "Tuttle Publishing",
    publishedDate: "2013-02-12",
    description:
      "Brazilian Jiu-Jitsu is a guide to the most effective and devastating techniques in popular martial arts by World Champion and Brazilian Jiu Jitsu legend Alexandre Paiva. The book contains over 1,000 full-color photographs demonstrating the moves that made the author the most feared competitor in BJJ circles and now one of the most sought-after instructors. Jiu-Jitsu or Jujutsu came into prominence in the early 90's when jiu-jitsu expert Royce Gracie won the first, second, and fourth Ultimate Fighting Championships against much larger opponents who were using other styles such as boxing, muay thai, karate, and wrestling. Since then it has become one of the most popular styles in MMA due to its focus on ground fighting. Learn the techniques that have proven dominant in Brazilian Jiu-Jitsu tournaments and in the Mixed Martial Arts cage: Takedowns The Closed Guard Passing The Closed Guard Butterfly Guard Open Guard Pass Side Control Half Guard Back Mount With sections devoted to both gi and no-gi techniques, whether training for a Brazilian Jiu-Jitsu tournament or a Mixed Martial Arts fight, Brazilian Jiu-Jitsu is one book no true competitor can afford to miss.",
    industryIdentifiers: [
      {
        type: "ISBN_13",
        identifier: "9781462910007",
      },
      {
        type: "ISBN_10",
        identifier: "1462910009",
      },
    ],
    readingModes: {
      text: true,
      image: true,
    },
    pageCount: 192,
    printType: "BOOK",
    categories: ["Sports & Recreation"],
    maturityRating: "NOT_MATURE",
    allowAnonLogging: true,
    contentVersion: "1.20.21.0.preview.3",
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false,
    },
    imageLinks: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Tg_QAgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Tg_QAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    language: "en",
    previewLink:
      "http://books.google.com/books?id=Tg_QAgAAQBAJ&printsec=frontcover&dq=jiu+jitsu&hl=&cd=5&source=gbs_api",
    infoLink:
      "https://play.google.com/store/books/details?id=Tg_QAgAAQBAJ&source=gbs_api",
    canonicalVolumeLink:
      "https://play.google.com/store/books/details?id=Tg_QAgAAQBAJ",
  },
  saleInfo: {
    country: "US",
    saleability: "FOR_SALE",
    isEbook: true,
    listPrice: {
      amount: 24.95,
      currencyCode: "USD",
    },
    retailPrice: {
      amount: 13.99,
      currencyCode: "USD",
    },
    buyLink:
      "https://play.google.com/store/books/details?id=Tg_QAgAAQBAJ&rdid=book-Tg_QAgAAQBAJ&rdot=1&source=gbs_api",
    offers: [
      {
        finskyOfferType: 1,
        listPrice: {
          amountInMicros: 24950000,
          currencyCode: "USD",
        },
        retailPrice: {
          amountInMicros: 13990000,
          currencyCode: "USD",
        },
        giftable: true,
      },
    ],
  },
  accessInfo: {
    country: "US",
    viewability: "PARTIAL",
    embeddable: true,
    publicDomain: false,
    textToSpeechPermission: "ALLOWED",
    epub: {
      isAvailable: true,
      acsTokenLink:
        "http://books.google.com/books/download/Brazilian_Jiu_Jitsu-sample-epub.acsm?id=Tg_QAgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
    },
    pdf: {
      isAvailable: true,
      acsTokenLink:
        "http://books.google.com/books/download/Brazilian_Jiu_Jitsu-sample-pdf.acsm?id=Tg_QAgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
    },
    webReaderLink:
      "http://play.google.com/books/reader?id=Tg_QAgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
    accessViewStatus: "SAMPLE",
    quoteSharingAllowed: false,
  },
  searchInfo: {
    textSnippet:
      "The book contains over 1,000 full-color photographs demonstrating the moves that made the author the most feared competitor in BJJ circles and now one of the most sought-after instructors.",
  },
};

describe("App Component ", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Book book={aBook} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
