'use client';

import { useState } from 'react';
import { ChevronDown, ExternalLink, Globe, MapPin } from 'lucide-react';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('exclusive-photos');
  const [showFollowerDropdown, setShowFollowerDropdown] = useState(false);

  return (
    <div className="dark-theme min-h-screen">
      <div className="container mx-auto max-w-lg px-4 py-6">
        {/* Profile Header Section */}
        <div className="userProfileImage">
          <div className="overlayopacity" />
          <img
            src="https://i.imgur.com/XnzUEAy.jpeg"
            alt="Profile"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Profile Details */}
        <div className="text-center mb-6">
          <div className="profileName justify-center">
            <h2 className="onPrimaryMain text-xl font-semibold">Sarah Johnson</h2>
            <svg className="verificationImg" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                stroke="#00D9FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="#00D9FF"
              />
            </svg>
          </div>
          <div className="onPrimaryL2 text-sm mb-2">@sarahcreates</div>

          {/* Location */}
          <div className="flex items-center justify-center gap-1 mb-4">
            <MapPin className="w-4 h-4 onPrimaryL2" />
            <span className="onPrimaryL2 text-sm">United States</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-3 mb-4">
            <a
              href="https://wa.me/1234567890"
              className="socialicon"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488" />
              </svg>
            </a>
            <a
              href="https://instagram.com/sarahcreates"
              className="socialicon"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
              </svg>
            </a>
            <a
              href="https://t.me/sarahcreates"
              className="socialicon"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </div>

          {/* Follower Count */}
          <div className="relative">
            <button
              className="onPrimaryMain flex items-center gap-2 text-sm font-semibold mb-4 mx-auto"
              onClick={() => setShowFollowerDropdown(!showFollowerDropdown)}
            >
              <span>125K</span>
              <span className="onPrimaryL1">Total Followers</span>
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="galleryImage aspect-square">
            <img
              src="https://i.imgur.com/XnzUEAy.jpeg"
              alt="Gallery"
              className="galleryImage w-full h-full"
            />
          </div>
          <div className="galleryImage aspect-square">
            <img
              src="https://i.imgur.com/XnzUEAy.jpeg"
              alt="Gallery"
              className="galleryImage w-full h-full"
            />
          </div>
          <div className="galleryImage aspect-square">
            <img
              src="https://i.imgur.com/XnzUEAy.jpeg"
              alt="Gallery"
              className="galleryImage w-full h-full"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-4">
          <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
            🎉 Access Free Today
          </button>
        </div>

        {/* 3 Steps Instructions */}
        <div className="text-center mb-6 onPrimaryL1">
          <p className="text-sm mb-3">⬇️ With 3 Steps ⬇️</p>
          <div className="text-xs space-y-1">
            <p>1. Sign Up</p>
            <p>2. Find and Add My Username</p>
            <p>3. Access Exclusive Content 24 Hours</p>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="shoutsTabMainDiv">
          <div className="menuList">
            <button
              className={`testMenuItem ${
                activeTab === 'exclusive-photos' ? 'active' : 'onPrimaryL1'
              }`}
              onClick={() => setActiveTab('exclusive-photos')}
            >
              Exclusive Photos
            </button>
            <button
              className={`testMenuItem ${
                activeTab === 'exclusive-videos' ? 'active' : 'onPrimaryL1'
              }`}
              onClick={() => setActiveTab('exclusive-videos')}
            >
              Exclusive Videos
            </button>
          </div>

          <div className="min-h-[300px]">
            {activeTab === 'exclusive-photos' ? (
              <div className="grid grid-cols-3 gap-3">
                <div className="galleryImage aspect-square relative">
                  <img
                    src="https://i.imgur.com/XnzUEAy.jpeg"
                    alt="Exclusive Photo 1"
                    className="galleryImage w-full h-full filter blur-sm"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20" />
                </div>
                <div className="galleryImage aspect-square relative">
                  <img
                    src="https://i.imgur.com/XnzUEAy.jpeg"
                    alt="Exclusive Photo 2"
                    className="galleryImage w-full h-full filter blur-sm"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20" />
                </div>
                <div className="galleryImage aspect-square relative">
                  <img
                    src="https://i.imgur.com/XnzUEAy.jpeg"
                    alt="Exclusive Photo 3"
                    className="galleryImage w-full h-full filter blur-sm"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20" />
                </div>
                <div className="galleryImage aspect-square relative">
                  <img
                    src="https://i.imgur.com/XnzUEAy.jpeg"
                    alt="Exclusive Photo 4"
                    className="galleryImage w-full h-full filter blur-sm"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20" />
                </div>
                <div className="galleryImage aspect-square relative">
                  <img
                    src="https://i.imgur.com/XnzUEAy.jpeg"
                    alt="Exclusive Photo 5"
                    className="galleryImage w-full h-full filter blur-sm"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20" />
                </div>
                <div className="galleryImage aspect-square relative">
                  <img
                    src="https://i.imgur.com/XnzUEAy.jpeg"
                    alt="Exclusive Photo 6"
                    className="galleryImage w-full h-full filter blur-sm"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20" />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-3">
                <div className="galleryImage aspect-square relative">
                  <img
                    src="https://i.imgur.com/XnzUEAy.jpeg"
                    alt="Exclusive Video 1"
                    className="galleryImage w-full h-full filter blur-sm"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 rounded-full p-3">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="galleryImage aspect-square relative">
                  <img
                    src="https://i.imgur.com/XnzUEAy.jpeg"
                    alt="Exclusive Video 2"
                    className="galleryImage w-full h-full filter blur-sm"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 rounded-full p-3">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="galleryImage aspect-square relative">
                  <img
                    src="https://i.imgur.com/XnzUEAy.jpeg"
                    alt="Exclusive Video 3"
                    className="galleryImage w-full h-full filter blur-sm"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 rounded-full p-3">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="galleryImage aspect-square relative">
                  <img
                    src="https://i.imgur.com/XnzUEAy.jpeg"
                    alt="Exclusive Video 4"
                    className="galleryImage w-full h-full filter blur-sm"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 rounded-full p-3">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="galleryImage aspect-square relative">
                  <img
                    src="https://i.imgur.com/XnzUEAy.jpeg"
                    alt="Exclusive Video 5"
                    className="galleryImage w-full h-full filter blur-sm"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 rounded-full p-3">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="galleryImage aspect-square relative">
                  <img
                    src="https://i.imgur.com/XnzUEAy.jpeg"
                    alt="Exclusive Video 6"
                    className="galleryImage w-full h-full filter blur-sm"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 rounded-full p-3">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 mb-6">
          <div className="mb-4">
            <a href="https://linkme.bio" target="_blank" rel="noreferrer" className="inline-block">
              <div className="w-6 h-6 mx-auto mb-2">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                    fill="url(#gradient)"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ff6b6b" />
                      <stop offset="25%" stopColor="#feca57" />
                      <stop offset="50%" stopColor="#48dbfb" />
                      <stop offset="100%" stopColor="#ff9ff3" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </a>
          </div>
          <div className="mb-4">
            <a href="https://linkme.bio/signup" className="onPrimaryMain text-base font-medium">
              <span className="bgGradient-8">NO CC | NO FAKE | NO SUBSCRIBE</span>
            </a>
          </div>
          <div className="text-xs onPrimaryL2">
            <a href="https://linkme.bio/privacy" className="hover:text-white transition-colors">
              Privacy
            </a>{' '}
            |{' '}
            <a href="https://linkme.bio/cookies" className="hover:text-white transition-colors">
              Cookie Notice
            </a>{' '}
            |{' '}
            <a href="https://linkme.bio/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Floating Banner */}
      <div className="floating-banner">
        <a href="https://linkme.bio/signup" className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-gradient-to-r from-blue-500 to-purple-500" />
            <span className="text-sm font-medium text-black">
              FREE ACCESS FOR YOU 💦🥵
            </span>
          </div>
          <button className="text-gray-500 hover:text-black">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
}
