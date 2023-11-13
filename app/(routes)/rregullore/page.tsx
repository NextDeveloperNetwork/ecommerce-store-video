import React from 'react';

const RregulloreFaqes = () => {
  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Rregullore e Pergjithsme</h1>
      
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-red-500 mb-2">1. Përdorimi i Faqes</h2>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">1.1</span> Duke përdorur këtë faqe, ju pranoni të respektoni dhe të bindeni nga kushtet dhe rregulloret tona.
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">1.2</span> Ju jeni përgjegjës për sigurinë dhe privatësinë e informacionit tuaj të regjistruar në faqen tonë.
        </p>

        <h2 className="text-xl font-semibold text-red-500 mt-4 mb-2">2. Privatësia dhe të Dhënat Personale</h2>
        <p className="text-gray-700">
          <span className="font-semibold">2.1</span> Ne respektojmë privatësinë tuaj dhe do të trajtojmë të dhënat personale në përputhje me politikën tonë të privatësisë.
        </p>

        <h2 className="text-xl font-semibold text-red-500 mt-4 mb-2">3. Përdorimi i Cookies</h2>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">3.1</span> Faqja jonë mund të përdorë cookies për të përmirësuar përvojën tuaj në internet. Ju mund të ndryshoni cilësimet e cookies në shfletuesin tuaj.
        </p>

        <h2 className="text-xl font-semibold text-red-500 mt-4 mb-2">4. Përmbajtja dhe Informacioni</h2>
        <p className="text-gray-700">
          <span className="font-semibold">4.1</span> Përmbajtja e faqes sonë është e destinuar për informacion dhe përdorim të përgjithshëm.
        </p>

        <h2 className="text-xl font-semibold text-red-500 mt-4 mb-2">5. Ndryshimet në Rregullore</h2>
        <p className="text-gray-700">
          <span className="font-semibold">5.1</span> Ne kemi të drejtën të ndryshojmë këtë rregullore në çdo kohë. Ndryshimet do të publikohen në faqen tonë.
        </p>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Për pyetje shtesë, ju lutemi të na kontaktoni në [Kontakti i Faqes].
      </p>
    </div>
  );
};

export default RregulloreFaqes;