import React from 'react';

const RregulloreKthimeRimbursime = () => {
  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Rregullore për Kthimet dhe Rimbursimet e Produkteve</h1>
      
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-red-500 mb-2">1. Kthimet</h2>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">1.1</span> Ne pranojmë kthimet e produkteve nëse ata plotësojnë kriteret tona të kthimit.
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">1.2</span> Ju lutemi të njoftoni ekipin tonë të kërkimit për kthime brenda një periudhe të arsyeshme nga data e marrjes së produktit.
        </p>

        <h2 className="text-xl font-semibold text-red-500 mt-4 mb-2">2. Kriteret e Kthimit</h2>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">2.1</span> Produkti duhet të jetë në gjendje të pandryshuar dhe me ambalazhin origjinal të paprekur.
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">2.2</span> Kostot e kthimit janë në përgjegjësi të blerësit.
        </p>

        <h2 className="text-xl font-semibold text-red-500 mt-4 mb-2">3. Rimbursimet</h2>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">3.1</span> Rimbursimet do të jepen për produktet që janë dëmtuar gjatë transportit ose nëse ka një problem me cilësinë.
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">3.2</span> Posta nuk mbulohet nga kompania për kthimet dhe rimbursimet.
        </p>

        <h2 className="text-xl font-semibold text-red-500 mt-4 mb-2">4. Procedura e Kthimit dhe Rimbursimit</h2>
        <p className="text-gray-700">
          <span className="font-semibold">4.1</span> Për të kërkuar një kthim ose rimbursim, ju lutemi të na kontaktoni në [Kontakti i Kërkimit të Kthimit].
        </p>

        <h2 className="text-xl font-semibold text-red-500 mt-4 mb-2">5. Njoftimi për Problemet</h2>
        <p className="text-gray-700">
          <span className="font-semibold">5.1</span> Nëse produkti ka ndonjë problem, ju lutemi të na njoftoni brenda një periudhe të arsyeshme nga marrja e produktit.
        </p>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Për pyetje shtesë, ju lutemi të na kontaktoni në [Kontakti i Shërbimit të Klientit].
      </p>
    </div>
  );
};

export default RregulloreKthimeRimbursime;
