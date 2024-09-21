'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Zap, Send, Phone, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function ProfessionalStudentContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    address: '',
    highSchool: '',
    graduationYear: '',
    course: '',
    englishProficiency: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Application submitted! (This is a demo)')
    setFormData({
      name: '',
      email: '',
      phone: '',
      dob: '',
      gender: '',
      address: '',
      highSchool: '',
      graduationYear: '',
      course: '',
      englishProficiency: '',
      message: ''
    })
  }

  return (
    <div className="min-h-screen bg-black p-8 flex flex-col items-center justify-center">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold text-white mb-8 text-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
       Contact Us
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl">
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="">
            <CardHeader>
              <CardTitle className="text-3xl font-bold ">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6 space-y-4">
                <p className="flex items-center"><MapPin className="mr-2 text-gray-500" /> Khade Complex, Near Nigam Hospital, Dahivadi Chowk, Vaduj</p>
                <p className="flex items-center"><Phone className="mr-2 text-gray-500" /> 7385685431, 7385425431</p>
                <p className="flex items-center"><Mail className="mr-2 text-gray-500" /> info@shreemanjunath.edu</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Admissions Open for 2024-25!</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>G.N.M. (General Nursing and Midwifery)</li>
                  <li>Diploma Course</li>
                  <li>Duration: 3 years</li>
                  <li>Eligibility: 12th Grade (min 45%)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <motion.li 
                    className="flex items-center"
                    whileHover={{ scale: 1.05, originX: 0 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Zap className="mr-2 text-gray-500" /> 200+ bed hospital for training
                  </motion.li>
                  <motion.li 
                    className="flex items-center"
                    whileHover={{ scale: 1.05, originX: 0 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Zap className="mr-2 text-gray-500" /> Well-equipped computer lab
                  </motion.li>
                  <motion.li 
                    className="flex items-center"
                    whileHover={{ scale: 1.05, originX: 0 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Zap className="mr-2 text-gray-500" /> 100% job placement assistance
                  </motion.li>
                  <motion.li 
                    className="flex items-center"
                    whileHover={{ scale: 1.05, originX: 0 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Zap className="mr-2 text-gray-500" /> Educational loan assistance available
                  </motion.li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-3xl font-bold ">Student Application Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input
                      type="date"
                      id="dob"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label>Gender</Label>
                  <RadioGroup defaultValue="female" className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="highSchool">High School Name</Label>
                    <Input
                      id="highSchool"
                      name="highSchool"
                      value={formData.highSchool}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="graduationYear">Graduation Year</Label>
                    <Select onValueChange={handleSelectChange('graduationYear')}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(5)].map((_, i) => (
                          <SelectItem key={i} value={`${new Date().getFullYear() - i}`}>
                            {new Date().getFullYear() - i}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="course">Preferred Course</Label>
                  <Select onValueChange={handleSelectChange('course')}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gnm">G.N.M. (General Nursing and Midwifery)</SelectItem>
                      <SelectItem value="bsc">B.Sc. Nursing</SelectItem>
                      <SelectItem value="msc">M.Sc. Nursing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="englishProficiency">English Proficiency</Label>
                  <Select onValueChange={handleSelectChange('englishProficiency')}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select proficiency level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                      <SelectItem value="native">Native</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Any additional information you'd like to share..."
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="mr-2" /> Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        className="mt-8 w-full max-w-7xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card>
          <CardContent className="p-0">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.7485874272396!2d74.34942631486701!3d17.56358988796855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc3a1d85555555d%3A0x5555555555555555!2sVaduj%2C%20Maharashtra%20415506!5e0!3m2!1sen!2sin!4v1623456789012!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy"
            ></iframe>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}