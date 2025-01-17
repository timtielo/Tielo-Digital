import React from 'react';
import { motion } from 'framer-motion';
import { Workflow, ArrowRight, Database, Zap, Shield, Clock, Check } from 'lucide-react';
import { Link } from '../../components/Link';
import { SEO } from '../../components/SEO';

const features = [
  {
    icon: Database,
    title: 'Systeem Integratie',
    description: 'Naadloze verbinding tussen verschillende software systemen'
  },
  {
    icon: Zap,
    title: 'Automatische Dataverwerking',
    description: 'Real-time synchronisatie van gegevens tussen applicaties'
  },
  {
    icon: Shield,
    title: 'Foutreductie',
    description: 'Minimaliseer menselijke fouten in dataverwerking'
  },
  {
    icon: Clock,
    title: 'Tijdbesparing',
    description: 'Automatiseer repetitieve taken voor maximale efficiency'
  }
];

const benefits = [
  'Systeem integratie tussen jouw applicaties',
  'Automatische dataverwerking en synchronisatie',
  'Foutreductie door slimme validaties',
  'Realtime monitoring en rapportages'
];

export function WorkflowPage() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Workflow Automatisering | Systeem Integratie & Procesoptimalisatie"
        description="Optimaliseer jouw bedrijfsprocessen met professionele workflow automatisering. Verbind systemen, elimineer handmatig werk en verhoog efficiency."
        keywords={[
          'Workflow Automatisering',
          'Systeem Integratie',
          'Procesoptimalisatie',
          'Bedrijfsautomatisering',
          'API Koppelingen',
          'Dataverwerking'
        ]}
        ogType="website"
        canonical="https://tielo-digital.nl/diensten/workflow"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#fff5f0] to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                <Workflow className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-rubik">
                Workflow Automatisering
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transformeer jouw bedrijfsprocessen met intelligente workflow automatisering. 
                We verbinden jouw systemen, automatiseren handmatige taken en optimaliseren 
                datastromen voor maximale efficiency. Van eenvoudige procesautomatisering 
                tot complexe systeemintegraties - wij maken het mogelijk.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8 font-rubik">Wat krijg je?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="relative"
                  >
                    <div className="w-32 h-32 bg-primary rounded-2xl flex items-center justify-center">
                      <Workflow className="w-16 h-16 text-white" />
                    </div>
                    
                    <div className="absolute inset-0 -m-8">
                      <div className="absolute inset-0 border-4 border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
                      <div className="absolute inset-0 -m-4 border-4 border-primary/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 font-rubik">
              Klaar voor efficiëntere workflows?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Plan een gratis analyse en ontdek hoe we jouw processen kunnen automatiseren
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg 
                       font-semibold text-lg hover:bg-primary/90 transition-all duration-300
                       hover:scale-[1.02] active:scale-[0.98]"
            >
              Plan je gratis analyse
              <ArrowRight className="ml-2 w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}