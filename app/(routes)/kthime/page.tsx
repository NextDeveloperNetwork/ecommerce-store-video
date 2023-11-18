import React from 'react';

const EdiStoreReturns = async () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-md shadow-lg">
      <h1 className="text-4xl font-bold mb-8">RREGULLORE E KTHIMEVE - EDI STORE</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Neni 1: Kushtet për Kthime</h2>
        <p className="mb-4">
          1.1 Klientët kanë të drejtë të kthejnë produktet e blera nga Edi Store brenda një periudhe të caktuar pas marrjes së tyre. 5-DITE
        </p>
        <p>
          1.2 Për të kthyer një produkt, klienti duhet të sigurojë që produkti të jetë në gjendjen e tij origjinale dhe me të gjitha pjesët origjinale të përfshira.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Neni 2: Procedura për Kthimet</h2>
        <p className="mb-4">2.1 Klienti duhet të bëjë një kërkesë të shkruar për kthim përmes faqes sonë të internetit ose të kontaktojë shërbimin tonë të klientit.</p>
        <p>
          2.2 Pas pranimit të kërkesës, Edi Store do të sigurojë udhëzime të detajuara për procedurën e kthimit dhe adresën e kthimit.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Neni 3: Inspektimi dhe Rimbursimi</h2>
        <p className="mb-4">
          3.1 Pas marrjes së produktit të kthyer, Edi Store do të bëjë një inspektim për të verifikuar gjendjen e produktit dhe për të siguruar që plotëson kushtet e kthimit.
        </p>
        <p>
          3.2 Nëse produkti kalon inspektimin, klientit do t'i kthehet vlera e produktit në formë të rimbursimit ose shkëmbimit me një produkt tjetër.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Neni 4: Përgjegjësitë dhe Informacioni</h2>
        <p className="mb-4">
          4.1 Klienti është përgjegjës për pagesën e kostos së dërgesës për kthimin e produktit, përveç në rastin e produkteve të dëmtuara ose të cilat kanë ardhur me defekte.
        </p>
        <p>
          4.2 Informacioni i plotë dhe i saktë duhet të përcaktohet në kërkesën e kthimit dhe në pjesën e jashtme të paketës së kthyer.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Neni 5: Ndryshimet dhe Përditësimet</h2>
        <p className="mb-4">
          5.1 Kjo rregullore mund të përditësohet dhe ndryshohet sipas nevojave të Edi Store. Çdo ndryshim do të publikohet në faqen tonë të internetit.
        </p>
        <p>5.2 Klientët duhet të rishikojnë rregulloren periodikisht dhe të informohen për ndryshimet e fundit në politikën e kthimeve.</p>
      </div>

      <p className="italic">
        Kjo rregullore ka hyrë në fuqi nga data [shënoni datën] dhe do të zbatohet për kthimet e produkteve nga Edi Store.
      </p>
    </div>
  );
};

export default EdiStoreReturns;
