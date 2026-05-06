interface FeatureCardProps {
  title: string;
  description: string;
}

export default function FeatureCard({
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-gray-400">
        {description}
      </p>
    </div>
  );
}