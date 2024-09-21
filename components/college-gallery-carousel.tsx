"use client"

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Image from 'next/image'

const galleryItems = [
  {
    id: 1,
    image: "/lab.jpg",
    title: "State-of-the-Art Research Laboratory",
    shortDescription: "Cutting-edge facilities for advanced medical research",
    fullDescription: "Our modern research laboratory is equipped with the latest technology, providing students and faculty with an ideal environment for groundbreaking medical research. From genomics to drug discovery, this facility supports a wide range of scientific investigations."
  },
  {
    id: 2,
    image: "/ward.jpg",
    title: "Hands-On Practical Laboratory",
    shortDescription: "Gain practical skills in a well-equipped environment",
    fullDescription: "Our practical laboratory offers students a chance to apply theoretical knowledge in a real-world setting. With state-of-the-art equipment and ample workspace, students can conduct experiments, analyze samples, and develop crucial laboratory skills essential for their medical careers."
  },
  {
    id: 3,
    image: "/practical-lab.jpg",
    title: "Clinical Training Ward",
    shortDescription: "Experience real hospital environments during your studies",
    fullDescription: "Our on-campus clinical training ward simulates a real hospital environment, allowing students to practice patient care in a controlled setting. This facility helps bridge the gap between classroom learning and real-world medical practice, preparing students for their clinical rotations and future careers."
  },
  {
    id: 4,
    image: "/lecture-hall.png",
    title: "Modern Lecture Halls",
    shortDescription: "Engage in interactive learning experiences",
    fullDescription: "Our spacious, technologically advanced lecture halls provide an optimal learning environment. Equipped with high-quality audiovisual systems and comfortable seating, these halls facilitate engaging lectures, seminars, and guest speaker events, enhancing the overall learning experience."
  },
  {
    id: 5,
    image: "/library.png",
    title: "Extensive Medical Library",
    shortDescription: "Access a wealth of medical knowledge",
    fullDescription: "Our comprehensive medical library houses an extensive collection of textbooks, journals, and digital resources. With quiet study areas, group discussion rooms, and computer stations, it serves as a hub for research, study, and collaboration among students and faculty."
  }
]

interface Item {
    id: number;
    title: string;
    image: string;
    shortDescription: string;
    fullDescription: string;
}

export function CollegeGalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % galleryItems.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const handleCardClick = (item: Item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + galleryItems.length) % galleryItems.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % galleryItems.length)
  }

  const visibleItems = [
    galleryItems[currentIndex],
    galleryItems[(currentIndex + 1) % galleryItems.length],
    galleryItems[(currentIndex + 2) % galleryItems.length],
  ]

  return (
    <section className="w-full bg-gradient-to-b from-black to-gray-900 py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 text-white">Explore Our Campus</h2>
        <div className="relative">
          <div className="flex justify-center items-stretch space-x-6">
            {visibleItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="w-1/3">
                <Card 
                  className="cursor-pointer overflow-hidden h-[600px] flex flex-col bg-white/10 backdrop-blur-lg border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => handleCardClick(item)}
                >
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="w-full h-72 relative overflow-hidden">
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-2xl font-semibold mb-4 text-white line-clamp-2">{item.title}</h3>
                      <p className="text-base text-gray-300 mb-4 line-clamp-3">{item.shortDescription}</p>
                      <div className="mt-auto">
                        <div className="space-y-2 text-sm text-gray-400">
                          <p><span className="font-semibold text-gray-300">ID:</span> {item.id}</p>
                          <p><span className="font-semibold text-gray-300">Type:</span> {getItemType(item.title)}</p>
                          <p><span className="font-semibold text-gray-300">Key Feature:</span> {getKeyFeature(item.fullDescription)}</p>
                        </div>
                        <Button variant="secondary" size="lg" className="mt-6 w-full">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </Button>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px] bg-gray-900 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{selectedItem?.title}</DialogTitle>
          </DialogHeader>
          <div className="w-full h-80 relative rounded-md mb-6">
            <Image 
              src={selectedItem?.image || ''}
              alt={selectedItem?.title || ''}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <DialogDescription>
            <p className="text-lg text-gray-300 mb-4">{selectedItem?.shortDescription}</p>
            <p className="text-gray-400">{selectedItem?.fullDescription}</p>
          </DialogDescription>
          <Button variant="secondary" onClick={() => setIsModalOpen(false)} className="mt-6">
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  )
}

// Helper functions to extract additional information
function getItemType(title: string): string {
  if (title.includes("Laboratory")) return "Research Facility";
  if (title.includes("Ward")) return "Clinical Training";
  if (title.includes("Lecture")) return "Educational Space";
  if (title.includes("Library")) return "Resource Center";
  return "Campus Facility";
}

function getKeyFeature(description: string): string {
  const features = description.split(". ");
  return features[features.length - 1];
}