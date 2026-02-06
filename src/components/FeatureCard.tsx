import React from 'react';
import Card from './ui/Card';
import { theme } from '@/styles/theme';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
  iconColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  iconBgColor,
  iconColor,
}) => {
  return (
    <Card
      variant="elevated"
      padding="lg"
      className="
        relative overflow-hidden text-center group
        transition-all duration-500 ease-out
        hover:-translate-y-2 hover:shadow-2xl
      "
    >
      {/* Soft gradient glow */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-0
          group-hover:opacity-100 transition-opacity duration-500
        "
        style={{
          background:
            'radial-gradient(circle at top, rgba(255,255,255,0.12), transparent 60%)',
        }}
      />

      {/* Shine animation */}
      <div
        className="
          pointer-events-none absolute -inset-[40%] opacity-0
          group-hover:opacity-100 transition-opacity duration-700
          rotate-12
        "
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)',
          animation: 'featureShine 1.3s ease-in-out',
        }}
      />

      {/* Icon Wrapper */}
      <div className="relative mx-auto mb-5 w-16 h-16 flex items-center justify-center">
        {/* Animated ring */}
        <div
          className="
            absolute inset-0 rounded-full opacity-40
            blur-[1px]
            transition-all duration-500
            group-hover:scale-110 group-hover:opacity-70
          "
          style={{
            background: `conic-gradient(from 180deg, ${iconBgColor}, transparent, ${iconBgColor})`,
          }}
        />

        {/* Main icon circle */}
        <div
          className="
            relative w-16 h-16 rounded-full flex items-center justify-center
            transition-transform duration-500 ease-out
            group-hover:scale-110 group-hover:rotate-6
            shadow-lg
          "
          style={{ backgroundColor: iconBgColor }}
        >
          <div
            className="
              w-8 h-8 transition-all duration-500 ease-out
              group-hover:scale-110
            "
            style={{ color: iconColor }}
          >
            {icon}
          </div>
        </div>
      </div>

      {/* Title */}
      <Card.Title
        className="mb-2 text-lg font-semibold tracking-tight"
        style={{
          color: theme.colors.text.primary,
          fontFamily: theme.typography.fontFamily.sans.join(', '),
        }}
      >
        {title}
      </Card.Title>

      {/* Description */}
      <Card.Description
        className="leading-relaxed"
        style={{
          color: theme.colors.text.secondary,
          fontFamily: theme.typography.fontFamily.sans.join(', '),
        }}
      >
        {description}
      </Card.Description>

      {/* Bottom accent line */}
      <div
        className="
          mt-6 h-[3px] w-0 mx-auto rounded-full
          transition-all duration-500 ease-out
          group-hover:w-16
        "
        style={{
          background: `linear-gradient(90deg, transparent, ${iconColor}, transparent)`,
        }}
      />
    </Card>
  );
};

export default FeatureCard;
