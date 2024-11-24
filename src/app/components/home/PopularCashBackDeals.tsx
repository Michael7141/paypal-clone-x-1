"use client"
import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Plus } from "lucide-react"
import { Icon } from '@iconify/react/dist/iconify.js';

const cashBackDeals = [
    { name: 'Adorama', cashBack: '3%', type: 'Online only', logo: 'ion:logo-sass' },
    { name: '39DollarGlasses', cashBack: '5%', type: 'Online only', logo: 'flat-color-icons:cd-logo' },
    { name: 'MLS Store', cashBack: '1.5%', type: 'Online only', logo: 'ion:logo-apple' },
    { name: 'Cupshe', cashBack: '2.5%', type: 'Online', logo: 'tdesign:logo-twitter-filled' },
    { name: 'Twitch', cashBack: '4%', type: 'Online only', logo: 'ph:twitch-logo-light' },
    { name: 'Octocat', cashBack: '2%', type: 'Online only', logo: 'ion:logo-octocat' },
    { name: 'Google', cashBack: '3.5%', type: 'Online only', logo: 'ph:google-logo-fill' },
    { name: 'Jenkins', cashBack: '6%', type: 'Online only', logo: 'fluent-mdl2:jenkins-logo' },
    { name: 'Google Play', cashBack: '2.8%', type: 'Online only', logo: 'ph:google-play-logo-fill' },
    { name: 'Pinterest', cashBack: '4.2%', type: 'Online only', logo: 'ph:pinterest-logo-bold' },
    { name: 'Threads', cashBack: '3.7%', type: 'Online only', logo: 'ph:threads-logo' },
    { name: 'Open AI', cashBack: '5.5%', type: 'Online only', logo: 'ph:open-ai-logo-light' },
    { name: 'Spotify', cashBack: '2.3%', type: 'Online only', logo: 'ph:spotify-logo-light' },
    { name: 'Patreon', cashBack: '4.8%', type: 'Online only', logo: 'ph:patreon-logo-bold' },
    { name: 'WeChat', cashBack: '3.2%', type: 'Online only', logo: 'ph:wechat-logo-duotone' },
  ];

export default function PopularCashBackDeals() {
  return (
    <div className="w-full px-6 py-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Popular Cash Back deals</h2>
        <Button variant="link" className="text-blue-600 font-semibold">
          More
        </Button>
      </div>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {cashBackDeals.map((deal, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/3">
              <Card className="rounded-xl border shadow-sm">
                <CardContent className="p-6">
                  <div className="h-12 mb-4 flex items-center justify-start">
                    <Icon icon={deal.logo} className="h-12 w-12 text-[#142c8e]" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-medium text-lg">{deal.name}</h3>
                    <p className="text-base font-semibold">{deal.cashBack} cash back</p>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      {deal.type}
                      <Button size="icon" className="h-8 w-8 rounded-full bg-gray-200">
                        <Plus className="h-4 w-4 text-white hover:bg-red-400" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}





