import React, { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import type { FormState } from '../../types';

export const EcosystemSection: React.FC = () => {
  const [judgeForm, setJudgeForm] = useState<FormState>({ name: '', location: '', enroll: '', status: 'idle' });
  const [volunteerForm, setVolunteerForm] = useState<FormState>({ name: '', location: '', enroll: '', status: 'idle' });
  const [memberForm, setMemberForm] = useState<FormState>({ name: '', location: '', enroll: '', status: 'idle' });

  const handleSubmitForm = (
    formState: FormState,
    setFormState: React.Dispatch<React.SetStateAction<FormState>>
  ) => {
    if (!formState.name || !formState.location || !formState.enroll) {
      alert('Please fill out all fields.');
      return;
    }
    setFormState(prev => ({ ...prev, status: 'loading' }));
    
    // Simulate API call
    setTimeout(() => {
      setFormState(prev => ({ ...prev, status: 'success' }));
    }, 1500);
  };

  return (
    <section id="ecosystem" className="relative z-10 py-24 bg-[#100f0f]">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center">
          <span className="text-xs font-bold tracking-widest text-[#ff4c4c] uppercase block mb-2">ENGAGE WITH THE CREW</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white animate-pulse">JOIN THE ECOSYSTEM</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1: Become a Judge */}
          <div className="border border-[#2e2e2e] bg-[#1a1919]/60 p-8 rounded-xl flex flex-col justify-between gap-6 hover:border-[#ff4c4c]/30 transition-colors">
            <div>
              <h3 className="text-2xl font-bold text-white text-left uppercase">BECOME A JUDGE</h3>
              <p className="text-xs text-gray-400 text-left mt-2">
                Oversee tournament rules, evaluate code compliance, and ensure fair play in regional qualifying heats.
              </p>
            </div>

            {judgeForm.status === 'success' ? (
              <div className="bg-green-500/10 border border-green-500/30 p-6 rounded-lg text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-green-400 mx-auto" />
                <h4 className="font-bold text-white">Application Received!</h4>
                <p className="text-xs text-gray-400">Our regional board will contact you via email within 3 business days.</p>
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmitForm(judgeForm, setJudgeForm);
                }}
                className="space-y-4 text-left"
              >
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. John Doe"
                    value={judgeForm.name}
                    onChange={(e) => setJudgeForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-black/60 border border-[#2e2e2e] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#ff4c4c]" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Location</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Bengaluru, KA"
                    value={judgeForm.location}
                    onChange={(e) => setJudgeForm(prev => ({ ...prev, location: e.target.value }))}
                    className="w-full bg-black/60 border border-[#2e2e2e] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#ff4c4c]" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Institution/Company</label>
                  <input 
                    type="text" 
                    placeholder="e.g. IIT Bombay"
                    value={judgeForm.enroll}
                    onChange={(e) => setJudgeForm(prev => ({ ...prev, enroll: e.target.value }))}
                    className="w-full bg-black/60 border border-[#2e2e2e] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#ff4c4c]" 
                    required
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={judgeForm.status === 'loading'}
                  className="w-full bg-[#ff4c4c] hover:bg-[#e03d3d] text-white py-3 rounded text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  {judgeForm.status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      PROCESSING...
                    </>
                  ) : 'SIGN UP'}
                </button>
              </form>
            )}
          </div>

          {/* Column 2: Volunteer */}
          <div className="border border-[#2e2e2e] bg-[#1a1919]/60 p-8 rounded-xl flex flex-col justify-between gap-6 hover:border-[#ff4c4c]/30 transition-colors">
            <div>
              <h3 className="text-2xl font-bold text-white text-left uppercase">VOLUNTEER</h3>
              <p className="text-xs text-gray-400 text-left mt-2">
                Gain backend event operations experience, set up the cages, manage logistics, and run local team coordination.
              </p>
            </div>

            {volunteerForm.status === 'success' ? (
              <div className="bg-green-500/10 border border-green-500/30 p-6 rounded-lg text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-green-400 mx-auto" />
                <h4 className="font-bold text-white">Application Received!</h4>
                <p className="text-xs text-gray-400">Our regional board will contact you via email within 3 business days.</p>
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmitForm(volunteerForm, setVolunteerForm);
                }}
                className="space-y-4 text-left"
              >
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. John Doe"
                    value={volunteerForm.name}
                    onChange={(e) => setVolunteerForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-black/60 border border-[#2e2e2e] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#ff4c4c]" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Location</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Mumbai, MH"
                    value={volunteerForm.location}
                    onChange={(e) => setVolunteerForm(prev => ({ ...prev, location: e.target.value }))}
                    className="w-full bg-black/60 border border-[#2e2e2e] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#ff4c4c]" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Affiliated College</label>
                  <input 
                    type="text" 
                    placeholder="e.g. NIT Delhi"
                    value={volunteerForm.enroll}
                    onChange={(e) => setVolunteerForm(prev => ({ ...prev, enroll: e.target.value }))}
                    className="w-full bg-black/60 border border-[#2e2e2e] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#ff4c4c]" 
                    required
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={volunteerForm.status === 'loading'}
                  className="w-full bg-[#ff4c4c] hover:bg-[#e03d3d] text-white py-3 rounded text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  {volunteerForm.status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      PROCESSING...
                    </>
                  ) : 'SIGN UP'}
                </button>
              </form>
            )}
          </div>

          {/* Column 3: Community Member */}
          <div className="border border-[#2e2e2e] bg-[#1a1919]/60 p-8 rounded-xl flex flex-col justify-between gap-6 hover:border-[#ff4c4c]/30 transition-colors">
            <div>
              <h3 className="text-2xl font-bold text-white text-left uppercase">COMMUNITY MEMBER</h3>
              <p className="text-xs text-gray-400 text-left mt-2">
                Participate in local community forums, access the official rulebooks, and vote on community balance updates.
              </p>
            </div>

            {memberForm.status === 'success' ? (
              <div className="bg-green-500/10 border border-green-500/30 p-6 rounded-lg text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-green-400 mx-auto" />
                <h4 className="font-bold text-white">Joined Successfully!</h4>
                <p className="text-xs text-gray-400">Welcome to BotLeague! Check your inbox for the community Discord link.</p>
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmitForm(memberForm, setMemberForm);
                }}
                className="space-y-4 text-left"
              >
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. John Doe"
                    value={memberForm.name}
                    onChange={(e) => setMemberForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-black/60 border border-[#2e2e2e] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#ff4c4c]" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Location</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Delhi, DL"
                    value={memberForm.location}
                    onChange={(e) => setMemberForm(prev => ({ ...prev, location: e.target.value }))}
                    className="w-full bg-black/60 border border-[#2e2e2e] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#ff4c4c]" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="e.g. john@example.com"
                    value={memberForm.enroll}
                    onChange={(e) => setMemberForm(prev => ({ ...prev, enroll: e.target.value }))}
                    className="w-full bg-black/60 border border-[#2e2e2e] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#ff4c4c]" 
                    required
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={memberForm.status === 'loading'}
                  className="w-full bg-[#ff4c4c] hover:bg-[#e03d3d] text-white py-3 rounded text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  {memberForm.status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      PROCESSING...
                    </>
                  ) : 'SIGN UP'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
