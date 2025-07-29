import React, { useState } from 'react';
import { FileText, User, Calendar, MapPin, Briefcase, Users, Download, FileDown } from 'lucide-react';

interface RelativeInfo {
  relationship: string;
  fullName: string;
  birthYear: string;
  birthPlace: string;
  workplace: string;
  position: string;
  address: string;
}

interface PersonalInfo {
  fullName: string;
  birthDate: string;
  birthPlace: string;
  nationality: string;
  partyMembership: string;
  education: string;
  graduatedFrom: string;
  graduatedYear: string;
  specialization: string;
  scientificDegree: string;
  scientificTitle: string;
  languages: string;
  stateAwards: string;
  deputyStatus: string;
  currentPosition: string;
  currentWorkplace: string;
  startDate: string;
}

interface WorkExperience {
  period: string;
  position: string;
  workplace: string;
}

const ObyektivkaForm: React.FC = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    fullName: '',
    birthDate: '',
    birthPlace: '',
    nationality: 'ўзбек',
    partyMembership: '',
    education: 'олий',
    graduatedFrom: '',
    graduatedYear: '',
    specialization: '',
    scientificDegree: '',
    scientificTitle: '',
    languages: '',
    stateAwards: 'йўқ',
    deputyStatus: 'йўқ',
    currentPosition: '',
    currentWorkplace: '',
    startDate: ''
  });

  const [workExperience, setWorkExperience] = useState<WorkExperience[]>([
    { period: '', position: '', workplace: '' }
  ]);

  const [relatives, setRelatives] = useState<RelativeInfo[]>([
    { relationship: 'Отаси', fullName: '', birthYear: '', birthPlace: '', workplace: '', position: '', address: '' },
    { relationship: 'Онаси', fullName: '', birthYear: '', birthPlace: '', workplace: '', position: '', address: '' }
  ]);

  const handlePersonalInfoChange = (field: keyof PersonalInfo, value: string) => {
    setPersonalInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleWorkExperienceChange = (index: number, field: keyof WorkExperience, value: string) => {
    const updated = [...workExperience];
    updated[index] = { ...updated[index], [field]: value };
    setWorkExperience(updated);
  };

  const handleRelativeChange = (index: number, field: keyof RelativeInfo, value: string) => {
    const updated = [...relatives];
    updated[index] = { ...updated[index], [field]: value };
    setRelatives(updated);
  };

  const addWorkExperience = () => {
    setWorkExperience([...workExperience, { period: '', position: '', workplace: '' }]);
  };

  const addRelative = () => {
    setRelatives([...relatives, { relationship: '', fullName: '', birthYear: '', birthPlace: '', workplace: '', position: '', address: '' }]);
  };

  const removeWorkExperience = (index: number) => {
    if (workExperience.length > 1) {
      setWorkExperience(workExperience.filter((_, i) => i !== index));
    }
  };

  const removeRelative = (index: number) => {
    if (relatives.length > 2) {
      setRelatives(relatives.filter((_, i) => i !== index));
    }
  };

  const generateDocx = () => {
    console.log('Generating DOCX document with data:', { personalInfo, workExperience, relatives });
    alert('DOCX formatda hujjat yaratilmoqda... (Bu demo versiyasi)');
  };

  const generatePdf = () => {
    console.log('Generating PDF document with data:', { personalInfo, workExperience, relatives });
    alert('PDF formatda hujjat yaratilmoqda... (Bu demo versiyasi)');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8">
            <div className="flex items-center space-x-4">
              <FileText className="w-12 h-12" />
              <div>
                <h1 className="text-3xl font-bold">Маълумотнома яратиш</h1>
                <p className="text-blue-100 mt-2">Кадрлар учун тўлиқ маълумотнома формаси</p>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-12">
            {/* Personal Information Section */}
            <section className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-6">
                <User className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-800">Шахсий маълумотлар</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Фамилияси, исми ва отасининг исми
                  </label>
                  <input
                    type="text"
                    value={personalInfo.fullName}
                    onChange={(e) => handlePersonalInfoChange('fullName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Мисол: Абдуллаев Ботир Баҳодирович"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Туғилган санаси
                  </label>
                  <input
                    type="date"
                    value={personalInfo.birthDate}
                    onChange={(e) => handlePersonalInfoChange('birthDate', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Туғилган жойи
                  </label>
                  <input
                    type="text"
                    value={personalInfo.birthPlace}
                    onChange={(e) => handlePersonalInfoChange('birthPlace', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Мисол: Қашқадарё вилояти, Нишон тумани"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Миллати
                  </label>
                  <select
                    value={personalInfo.nationality}
                    onChange={(e) => handlePersonalInfoChange('nationality', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="ўзбек">ўзбек</option>
                    <option value="қозоқ">қозоқ</option>
                    <option value="тожик">тожик</option>
                    <option value="қорақалпоқ">қорақалпоқ</option>
                    <option value="рус">рус</option>
                    <option value="бошқа">бошқа</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Партиявийлиги
                  </label>
                  <input
                    type="text"
                    value={personalInfo.partyMembership}
                    onChange={(e) => handlePersonalInfoChange('partyMembership', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Мисол: Ўзбекистон Халқ демократик партияси аъзоси (ёки йўқ)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Тамомлаган муассаса
                  </label>
                  <input
                    type="text"
                    value={personalInfo.graduatedFrom}
                    onChange={(e) => handlePersonalInfoChange('graduatedFrom', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Мисол: Тошкент давлат университети"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Тамомлаган йили
                  </label>
                  <input
                    type="number"
                    value={personalInfo.graduatedYear}
                    onChange={(e) => handlePersonalInfoChange('graduatedYear', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="2023"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Мутахассислиги
                  </label>
                  <input
                    type="text"
                    value={personalInfo.specialization}
                    onChange={(e) => handlePersonalInfoChange('specialization', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Мисол: фалсафа"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Илмий даражаси
                  </label>
                  <input
                    type="text"
                    value={personalInfo.scientificDegree}
                    onChange={(e) => handlePersonalInfoChange('scientificDegree', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Мисол: фалсафа фанлари номзоди"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Илмий унвони
                  </label>
                  <input
                    type="text"
                    value={personalInfo.scientificTitle}
                    onChange={(e) => handlePersonalInfoChange('scientificTitle', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Мисол: доцент, профессор"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Биладиган чет тиллари
                  </label>
                  <input
                    type="text"
                    value={personalInfo.languages}
                    onChange={(e) => handlePersonalInfoChange('languages', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Мисол: рус, инглиз, форс тиллари"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ҳозирги лавозими
                  </label>
                  <input
                    type="text"
                    value={personalInfo.currentPosition}
                    onChange={(e) => handlePersonalInfoChange('currentPosition', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Мисол: кафедра мудири"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ҳозирги иш жойи
                  </label>
                  <input
                    type="text"
                    value={personalInfo.currentWorkplace}
                    onChange={(e) => handlePersonalInfoChange('currentWorkplace', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Мисол: Ўзбекистон Миллий университети миллий ғоя ва ижтимоий фалсафа кафедраси"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ишга киришган санаси
                  </label>
                  <input
                    type="date"
                    value={personalInfo.startDate}
                    onChange={(e) => handlePersonalInfoChange('startDate', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </section>

            {/* Work Experience Section */}
            <section className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-semibold text-gray-800">Меҳнат фаолияти</h2>
                </div>
                <button
                  onClick={addWorkExperience}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  + Қўшиш
                </button>
              </div>

              <div className="space-y-4">
                {workExperience.map((work, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 relative">
                    {workExperience.length > 1 && (
                      <button
                        onClick={() => removeWorkExperience(index)}
                        className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm"
                      >
                        ✕
                      </button>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Даври
                        </label>
                        <input
                          type="text"
                          value={work.period}
                          onChange={(e) => handleWorkExperienceChange(index, 'period', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="1993-1997 йй."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Лавозими
                        </label>
                        <input
                          type="text"
                          value={work.position}
                          onChange={(e) => handleWorkExperienceChange(index, 'position', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="талаба"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Иш жойи
                        </label>
                        <input
                          type="text"
                          value={work.workplace}
                          onChange={(e) => handleWorkExperienceChange(index, 'workplace', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Тошкент давлат университети"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Relatives Section */}
            <section className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-semibold text-gray-800">Яқин қариндошлар ҳақида маълумот</h2>
                </div>
                <button
                  onClick={addRelative}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  + Қўшиш
                </button>
              </div>

              <div className="space-y-6">
                {relatives.map((relative, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 relative">
                    {relatives.length > 2 && (
                      <button
                        onClick={() => removeRelative(index)}
                        className="absolute top-4 right-4 text-red-500 hover:text-red-700 text-sm"
                      >
                        ✕
                      </button>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Қариндошлиги
                        </label>
                        <select
                          value={relative.relationship}
                          onChange={(e) => handleRelativeChange(index, 'relationship', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Танланг</option>
                          <option value="Отаси">Отаси</option>
                          <option value="Онаси">Онаси</option>
                          <option value="Акаси">Акаси</option>
                          <option value="Сингилиси">Сингилиси</option>
                          <option value="Укаси">Укаси</option>
                          <option value="Турмуш ўртоғи">Турмуш ўртоғи</option>
                          <option value="Ўғли">Ўғли</option>
                          <option value="Қизи">Қизи</option>
                          <option value="Қайнотаси">Қайнотаси</option>
                          <option value="Қайнонаси">Қайнонаси</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Фамилияси, исми ва отасининг исми
                        </label>
                        <input
                          type="text"
                          value={relative.fullName}
                          onChange={(e) => handleRelativeChange(index, 'fullName', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Мисол: Абдуллаев Баҳодир"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Туғилган йили
                        </label>
                        <input
                          type="text"
                          value={relative.birthYear}
                          onChange={(e) => handleRelativeChange(index, 'birthYear', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="1941 йил"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Туғилган жойи
                        </label>
                        <input
                          type="text"
                          value={relative.birthPlace}
                          onChange={(e) => handleRelativeChange(index, 'birthPlace', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Самарқанд шаҳри"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Иш жойи
                        </label>
                        <input
                          type="text"
                          value={relative.workplace}
                          onChange={(e) => handleRelativeChange(index, 'workplace', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Тошкент давлат иқтисодиёт университети"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Лавозими
                        </label>
                        <input
                          type="text"
                          value={relative.position}
                          onChange={(e) => handleRelativeChange(index, 'position', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="ўқитувчи"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Турар жойи
                        </label>
                        <input
                          type="text"
                          value={relative.address}
                          onChange={(e) => handleRelativeChange(index, 'address', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Тошкент шаҳри, Мирзо Улуғбек тумани, Б.Ниёзов кўчаси, 30-уй, 15-хонадон"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-6 pt-8">
              <button
                onClick={generateDocx}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all transform hover:scale-105 flex items-center space-x-2"
              >
                <FileText className="w-5 h-5" />
                <span>DOCX юклаб олиш</span>
              </button>
              
              <button
                onClick={generatePdf}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all transform hover:scale-105 flex items-center space-x-2"
              >
                <FileDown className="w-5 h-5" />
                <span>PDF юклаб олиш</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObyektivkaForm;