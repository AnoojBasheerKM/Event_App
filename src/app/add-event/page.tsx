'use client';

import { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Tag, Upload, ArrowLeft } from 'lucide-react';

export default function AddEventPage() {
  const [formData, setFormData] = useState({
    eventName: '',
    organizerName: '',
    organizerEmail: '',
    organizerPhone: '',
    eventDate: '',
    eventTime: '',
    eventDuration: '',
    eventLocation: '',
    eventAddress: '',
    eventCity: '',
    eventState: '',
    eventCategory: '',
    eventDescription: '',
    maxAttendees: '',
    ticketPrice: '',
    eventImage: '',
    website: '',
    socialMedia: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Event form submitted:', formData);
    alert('Thank you for submitting your event! We will review it and get back to you within 24-48 hours.');
    // Reset form
    setFormData({
      eventName: '',
      organizerName: '',
      organizerEmail: '',
      organizerPhone: '',
      eventDate: '',
      eventTime: '',
      eventDuration: '',
      eventLocation: '',
      eventAddress: '',
      eventCity: '',
      eventState: '',
      eventCategory: '',
      eventDescription: '',
      maxAttendees: '',
      ticketPrice: '',
      eventImage: '',
      website: '',
      socialMedia: ''
    });
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-black opacity-60 blur-2xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <button
            onClick={handleBack}
            className="absolute left-0 top-0 flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </button>
          
          <h1 className="text-5xl font-bold text-white mb-6">Add Your Event</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Share your amazing event with our community. Fill out the form below and we'll help you get it listed.
          </p>
        </div>

        {/* Event Form */}
        <div className="bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Event Basic Information */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <Tag className="h-6 w-6" />
                <span>Event Information</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventName" className="block text-gray-300 mb-2 font-medium">
                    Event Name *
                  </label>
                  <input
                    type="text"
                    id="eventName"
                    name="eventName"
                    value={formData.eventName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Enter event name"
                  />
                </div>

                <div>
                  <label htmlFor="eventCategory" className="block text-gray-300 mb-2 font-medium">
                    Event Category *
                  </label>
                  <select
                    id="eventCategory"
                    name="eventCategory"
                    value={formData.eventCategory}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select category</option>
                    <option value="music">Music & Concerts</option>
                    <option value="business">Business & Networking</option>
                    <option value="technology">Technology</option>
                    <option value="food">Food & Drink</option>
                    <option value="sports">Sports & Fitness</option>
                    <option value="arts">Arts & Culture</option>
                    <option value="education">Education</option>
                    <option value="health">Health & Wellness</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="eventDescription" className="block text-gray-300 mb-2 font-medium">
                  Event Description *
                </label>
                <textarea
                  id="eventDescription"
                  name="eventDescription"
                  value={formData.eventDescription}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                  placeholder="Describe your event in detail..."
                />
              </div>
            </div>

            {/* Date and Time */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <Calendar className="h-6 w-6" />
                <span>Date & Time</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="eventDate" className="block text-gray-300 mb-2 font-medium">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="eventTime" className="block text-gray-300 mb-2 font-medium">
                    Start Time *
                  </label>
                  <input
                    type="time"
                    id="eventTime"
                    name="eventTime"
                    value={formData.eventTime}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="eventDuration" className="block text-gray-300 mb-2 font-medium">
                    Duration (hours)
                  </label>
                  <input
                    type="number"
                    id="eventDuration"
                    name="eventDuration"
                    value={formData.eventDuration}
                    onChange={handleInputChange}
                    min="1"
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="e.g., 3"
                  />
                </div>
              </div>
            </div>

            {/* Location */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <MapPin className="h-6 w-6" />
                <span>Location</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventLocation" className="block text-gray-300 mb-2 font-medium">
                    Venue Name *
                  </label>
                  <input
                    type="text"
                    id="eventLocation"
                    name="eventLocation"
                    value={formData.eventLocation}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Enter venue name"
                  />
                </div>

                <div>
                  <label htmlFor="eventAddress" className="block text-gray-300 mb-2 font-medium">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    id="eventAddress"
                    name="eventAddress"
                    value={formData.eventAddress}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Enter street address"
                  />
                </div>

                <div>
                  <label htmlFor="eventCity" className="block text-gray-300 mb-2 font-medium">
                    City *
                  </label>
                  <input
                    type="text"
                    id="eventCity"
                    name="eventCity"
                    value={formData.eventCity}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Enter city"
                  />
                </div>

                <div>
                  <label htmlFor="eventState" className="block text-gray-300 mb-2 font-medium">
                    State *
                  </label>
                  <input
                    type="text"
                    id="eventState"
                    name="eventState"
                    value={formData.eventState}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Enter state"
                  />
                </div>
              </div>
            </div>

            {/* Organizer Information */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <Users className="h-6 w-6" />
                <span>Organizer Information</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="organizerName" className="block text-gray-300 mb-2 font-medium">
                    Organizer Name *
                  </label>
                  <input
                    type="text"
                    id="organizerName"
                    name="organizerName"
                    value={formData.organizerName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Enter organizer name"
                  />
                </div>

                <div>
                  <label htmlFor="organizerEmail" className="block text-gray-300 mb-2 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="organizerEmail"
                    name="organizerEmail"
                    value={formData.organizerEmail}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Enter email address"
                  />
                </div>

                <div>
                  <label htmlFor="organizerPhone" className="block text-gray-300 mb-2 font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="organizerPhone"
                    name="organizerPhone"
                    value={formData.organizerPhone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Enter phone number"
                  />
                </div>

                <div>
                  <label htmlFor="website" className="block text-gray-300 mb-2 font-medium">
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="https://your-website.com"
                  />
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <Clock className="h-6 w-6" />
                <span>Event Details</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="maxAttendees" className="block text-gray-300 mb-2 font-medium">
                    Maximum Attendees
                  </label>
                  <input
                    type="number"
                    id="maxAttendees"
                    name="maxAttendees"
                    value={formData.maxAttendees}
                    onChange={handleInputChange}
                    min="1"
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="e.g., 100"
                  />
                </div>

                <div>
                  <label htmlFor="ticketPrice" className="block text-gray-300 mb-2 font-medium">
                    Ticket Price (₹)
                  </label>
                  <input
                    type="number"
                    id="ticketPrice"
                    name="ticketPrice"
                    value={formData.ticketPrice}
                    onChange={handleInputChange}
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="e.g., 500"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-8 border-t border-zinc-800">
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
              >
                Submit Event Request
              </button>
              <p className="text-gray-400 text-center mt-4 text-sm">
                We'll review your event and get back to you within 24-48 hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 