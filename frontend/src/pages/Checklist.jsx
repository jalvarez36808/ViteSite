import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/outline';

const checklistSections = {
  immediate: {
    title: 'Immediately After the Death of a Loved One',
    tasks: {
      notifications: {
        title: 'Notifications',
        subtasks: [
          { id: 'contact-family', title: 'Contact Immediate Family', content: `In the difficult moments following a loved one's passing, connecting with immediate family is crucial for support and necessary decision-making.

Steps to Contact Family:
1. Call or Visit in Person
2. Share the News Gently
3. Gather Contact Information
4. Discuss Next Steps
5. Coordinate Initial Responsibilities` },
          { id: 'notify-friends', title: 'Notify Close Friends and Extended Family', content: `Informing friends and extended family requires sensitivity and coordination.

Steps to Notify Others:
1. Create Contact List
2. Decide on Communication Method
3. Share Essential Information
4. Accept Offers of Help
5. Keep Track of Responses` },
          { id: 'notify-doctor', title: "Notify Descendant's Doctor", content: `Notifying the doctor is an important step for medical records and documentation.

Steps to Notify Doctor:
1. Contact Medical Office
2. Provide Essential Information
3. Request Medical Records
4. Discuss Death Certificate
5. Handle Outstanding Medical Matters` },
          { id: 'notify-employer', title: "Notify Descendant's Employer", content: `Notifying the employer ensures proper handling of final payments and benefits.

Steps to Notify Employer:
1. Contact HR Department
2. Provide Death Certificate
3. Inquire About Benefits
4. Discuss Final Paycheck
5. Request Information About Life Insurance` }
        ]
      },
      care: {
        title: 'Care',
        subtasks: [
          { id: 'care-children', title: "Descendant's Children", content: `Ensuring immediate care for children is a top priority.

Steps for Children's Care:
1. Ensure Immediate Safety
2. Contact Legal Guardian
3. Maintain Routine
4. Arrange School Notifications
5. Provide Emotional Support
6. Consider Counseling` },
          { id: 'care-pets', title: 'Pet Care', content: `Arranging care for pets requires immediate attention.

Steps for Pet Care:
1. Locate Pet Records
2. Find Temporary Caregiver
3. Maintain Pet's Schedule
4. Contact Veterinarian
5. Plan Long-term Care` }
        ]
      },
      wishes: {
        title: "Descendant's Wishes",
        subtasks: [
          { id: 'determine-wishes', title: "Determine Descendant's Wishes", content: `Understanding and honoring the deceased's wishes is important.

Steps to Determine Wishes:
1. Look for Written Instructions
2. Check Legal Documents
3. Consult Family Members
4. Review Any Pre-arrangements
5. Document All Findings` }
        ]
      },
      body: {
        title: "Descendant's Body",
        subtasks: [
          { id: 'cremation-burial', title: 'Decide on Cremation or Burial', content: `Making the decision between cremation and burial requires careful consideration.

Factors to Consider:
1. Known Wishes
2. Religious/Cultural Beliefs
3. Family Preferences
4. Cost Considerations
5. Timeline Requirements` },
          { id: 'transport-body', title: 'Arrange Transportation of the Body', content: `Proper transportation arrangements need to be made promptly.

Transportation Steps:
1. Contact Funeral Home
2. Arrange Pick-up Location
3. Complete Required Forms
4. Coordinate Timing
5. Confirm Transportation Details` }
        ]
      },
      funeral: {
        title: 'Funeral Home',
        subtasks: [
          { id: 'choose-funeral-home', title: 'Choose a Funeral Home', content: `Selecting an appropriate funeral home is an important decision.

Selection Steps:
1. Research Local Options
2. Compare Services/Prices
3. Read Reviews
4. Visit Facilities
5. Discuss Services
6. Review Contracts` }
        ]
      },
      will: {
        title: "Descendant's Will or Probate",
        subtasks: [
          { id: 'determine-will', title: 'How to Determine if There is a Will', content: `Locating and verifying a will is a crucial early step.

Steps to Find Will:
1. Search Personal Papers
2. Contact Attorney
3. Check Safe Deposit Box
4. Consult Family Members
5. Check County Records` },
          { id: 'probate-necessity', title: 'Is Probate Necessary?', content: `Understanding if probate is required for the estate.

Determining Factors:
1. Estate Size
2. Type of Assets
3. State Laws
4. Joint Ownership
5. Beneficiary Designations` },
          { id: 'probate-process', title: 'What to Expect in Probate', content: `Understanding the probate process helps prepare for what's ahead.

Probate Process Overview:
1. File Petition
2. Notify Heirs
3. Inventory Assets
4. Pay Debts
5. Distribute Assets
6. Close Estate` }
        ]
      }
    }
  },
  withinDays: {
    title: 'Within Days of the Death of a Loved One',
    tasks: {
      deathCertificate: {
        title: 'Obtaining a Death Certificate',
        subtasks: [
          { id: 'obtain-certificate', title: 'How to Obtain a Death Certificate', content: `Getting official death certificates is a necessary step.

Steps to Obtain:
1. Contact Vital Records Office
2. Gather Required Information
3. Complete Application
4. Pay Required Fees
5. Choose Delivery Method` },
          { id: 'multiple-copies', title: 'Obtain Copies of Death Certificate', content: `Multiple copies are often needed for various purposes.

Guidelines for Copies:
1. Determine Number Needed
2. List Required Organizations
3. Request Certified Copies
4. Store Securely
5. Keep Records of Usage` }
        ]
      },
      obituary: {
        title: 'Obituary Options',
        subtasks: [
          { id: 'write-obituary', title: 'How to Write an Obituary', content: `Writing a meaningful obituary to honor your loved one.

Writing Guidelines:
1. Gather Biographical Info
2. Include Key Life Events
3. List Survivors
4. Add Service Details
5. Proofread Carefully` },
          { id: 'facebook-memorial', title: 'Create a Facebook Memorial Page', content: `Creating an online memorial space on Facebook.

Setup Steps:
1. Gather Photos
2. Write Biography
3. Set Privacy Settings
4. Share with Family
5. Manage Comments` },
          { id: 'legacy-publish', title: 'Publish in Legacy.com', content: `Publishing obituary on Legacy.com for wider reach.

Publication Steps:
1. Create Account
2. Choose Package
3. Submit Content
4. Add Photos
5. Share Link` },
          { id: 'newspaper-submit', title: 'Submit to Newspapers', content: `Submitting obituary to local newspapers.

Submission Process:
1. Contact Newspapers
2. Check Requirements
3. Submit Content
4. Verify Publication
5. Keep Copies` }
        ]
      },
      funeral: {
        title: 'Making Funeral Arrangements',
        subtasks: [
          { id: 'gather-info', title: 'Gather Information About Loved One', content: `Collecting necessary information for funeral arrangements.

Information Needed:
1. Personal Details
2. Military Service
3. Religious Preferences
4. Special Requests
5. Family Traditions` },
          { id: 'collect-memories', title: 'Collect Memories for Funeral Service', content: `Gathering memories and materials for the service.

Items to Collect:
1. Photographs
2. Personal Stories
3. Achievement Records
4. Special Mementos
5. Video Clips` },
          { id: 'arrange-officiant', title: 'Arrange for Officiant/Clergy', content: `Securing someone to lead the funeral service.

Arrangement Steps:
1. Choose Type of Service
2. Contact Officiant
3. Discuss Format
4. Plan Readings
5. Confirm Details` },
          { id: 'arrange-music', title: 'Arrange Music', content: `Selecting and arranging music for the service.

Music Planning:
1. Choose Songs
2. Contact Musicians
3. Check Equipment
4. Create Playlist
5. Test Sound System` },
          { id: 'flowers-donations', title: 'Request Flowers or Donations', content: `Managing flower arrangements and donation requests.

Organization Steps:
1. Choose Florist
2. Select Arrangements
3. Set Up Donations
4. Communicate Preferences
5. Track Contributions` },
          { id: 'eulogies', title: 'Ask for Eulogies', content: `Coordinating eulogies for the service.

Eulogy Planning:
1. Choose Speakers
2. Provide Guidelines
3. Set Time Limits
4. Arrange Order
5. Offer Support` },
          { id: 'guest-book', title: 'Set Up a Guest Book', content: `Preparing a guest book for the service.

Setup Steps:
1. Purchase Book
2. Create Sign-in Area
3. Provide Pens
4. Assign Attendant
5. Save Messages` },
          { id: 'share-arrangements', title: 'Share Funeral Arrangements', content: `Communicating service details to family and friends.

Communication Steps:
1. Create Announcement
2. Choose Platforms
3. Include Details
4. Send Timely
5. Follow Up` }
        ]
      },
      home: {
        title: "Descendant's Home",
        subtasks: [
          { id: 'home-care', title: 'Arrange Care for Deceased Home', content: `Securing and maintaining the deceased's residence.

Home Care Steps:
1. Secure Property
2. Forward Mail
3. Maintain Utilities
4. Check Insurance
5. Regular Inspection` }
        ]
      },
      documents: {
        title: 'Documents',
        subtasks: [
          { id: 'gather-documents', title: 'Gather Important Documents', content: `Collecting and organizing essential paperwork.

Documents to Gather:
1. Birth Certificate
2. Marriage Certificate
3. Military Records
4. Property Deeds
5. Insurance Policies
6. Financial Statements` }
        ]
      },
      assistance: {
        title: 'Financial Assistance',
        subtasks: [
          { id: 'crowdfunding', title: 'Crowdfunding Platforms', content: `Various platforms available for funeral expense fundraising.

Popular Platforms:
1. GoFundMe
2. GiveButter
3. Donorbox
4. Classy
5. Snap! Raise
6. FundRazr
7. Facebook/Instagram` },
          { id: 'nonprofits', title: 'Assistance Through Nonprofits and Charities', content: `Organizations that provide funeral assistance.

Available Resources:
1. Funeral Consumers Alliance
2. Modest Needs
3. Children's Burial Assistance
4. Local Charities` },
          { id: 'community', title: 'Community Support', content: `Local community resources for assistance.

Support Sources:
1. Religious Organizations
2. Community Groups
3. Local Foundations
4. Civic Organizations` },
          { id: 'government', title: 'Government Assistance', content: `Government programs offering financial help.

Available Programs:
1. Social Security Benefits
2. Veterans Benefits
3. State Aid Programs
4. FEMA Assistance
5. County Resources` },
          { id: 'employer', title: 'Employer Assistance', content: `Workplace benefits and support options.

Benefit Types:
1. Life Insurance
2. Death Benefits
3. Pension Plans
4. Union Benefits
5. Employee Assistance` },
          { id: 'meals', title: 'Meal Assistance', content: `Services for meal support during bereavement.

Meal Services:
1. MealTrain
2. Grocery Delivery
3. Helping Hands
4. CaringBridge` }
        ]
      }
    }
  },
  afterTwoWeeks: {
    title: 'What to Do After 2 Weeks',
    tasks: {
      accounts: {
        title: 'Account Management',
        subtasks: [
          { id: 'close-accounts', title: 'Close or Transfer Accounts', content: `Managing accounts after a loved one's passing requires careful attention to detail.

Steps for Account Management:
1. Gather Account Information
   • Bank accounts
   • Credit cards
   • Investment accounts
   • Utility accounts
   • Subscription services

2. Contact Each Institution
   • Notify of the death
   • Request account closure or transfer
   • Submit required documentation
   • Get confirmation in writing

3. Handle Digital Accounts
   • Email accounts
   • Social media profiles
   • Online subscriptions
   • Digital payment services

4. Monitor Credit Reports
   • Request credit reports
   • Watch for suspicious activity
   • Place fraud alerts if needed` },
          { id: 'transfer-utilities', title: 'Transfer Utilities & Services', content: `Managing utility and service transfers to prevent interruption.

Steps for Utilities & Services:
1. List All Services
   • Electricity
   • Water
   • Gas
   • Internet
   • Phone
   • Cable/Streaming
   • Home Security

2. Contact Providers
   • Notify of the situation
   • Arrange transfers
   • Update billing information
   • Cancel unnecessary services

3. Document Changes
   • Keep records of transfers
   • Note final bill dates
   • Save confirmation numbers` }
        ]
      },
      insurance: {
        title: 'Insurance Claims',
        subtasks: [
          { id: 'life-insurance', title: 'Life Insurance Claims', content: `Processing life insurance claims requires organization and follow-through.

Steps for Life Insurance Claims:
1. Gather Documentation
   • Policy information
   • Death certificate
   • Beneficiary information
   • Claim forms

2. Contact Insurance Companies
   • File claims
   • Submit required documents
   • Track claim status
   • Follow up regularly

3. Consider Additional Policies
   • Employer policies
   • Credit card insurance
   • Mortgage insurance
   • Accidental death policies` },
          { id: 'other-insurance', title: 'Other Insurance Matters', content: `Managing other insurance policies and coverage changes.

Types of Insurance to Address:
1. Health Insurance
   • Cancel or transfer coverage
   • Handle outstanding claims
   • COBRA coverage if applicable

2. Property Insurance
   • Update home insurance
   • Transfer vehicle insurance
   • Modify coverage as needed

3. Disability Insurance
   • Cancel policies
   • Process final claims` }
        ]
      },
      property: {
        title: 'Property & Assets',
        subtasks: [
          { id: 'property-transfer', title: 'Property Transfer Process', content: `Managing the transfer of property and assets to beneficiaries.

Property Transfer Steps:
1. Real Estate
   • Gather property documents
   • Contact property lawyer
   • Update deed records
   • Handle mortgage transfers

2. Vehicles
   • Transfer titles
   • Update registration
   • Modify insurance coverage

3. Personal Property
   • Create inventory
   • Distribute according to will
   • Document transfers` },
          { id: 'asset-valuation', title: 'Asset Valuation', content: `Determining the value of assets for estate purposes.

Valuation Process:
1. Professional Appraisals
   • Real estate
   • Vehicles
   • Jewelry
   • Art and collectibles

2. Financial Assets
   • Investment accounts
   • Retirement accounts
   • Business interests

3. Documentation
   • Keep all appraisals
   • Photo documentation
   • Professional assessments` }
        ]
      },
      taxes: {
        title: 'Tax Matters',
        subtasks: [
          { id: 'final-taxes', title: 'Final Tax Returns', content: `Managing tax obligations for the deceased.

Tax Management Steps:
1. Personal Tax Return
   • Gather tax documents
   • File final return
   • Pay any taxes due
   • Request refunds if applicable

2. Estate Tax Return
   • Determine if required
   • Calculate estate value
   • File appropriate forms
   • Meet deadlines

3. Property Tax
   • Update records
   • Handle payments
   • Transfer obligations` },
          { id: 'tax-documents', title: 'Organize Tax Documents', content: `Collecting and organizing tax-related documents.

Document Organization:
1. Income Documents
   • W-2 forms
   • 1099 forms
   • Social Security statements
   • Pension distributions

2. Deduction Records
   • Medical expenses
   • Charitable contributions
   • Property tax payments

3. Asset Records
   • Investment statements
   • Property assessments
   • Business records` }
        ]
      },
      longTerm: {
        title: 'Long-term Planning',
        subtasks: [
          { id: 'estate-settlement', title: 'Estate Settlement Timeline', content: `Understanding and planning for the estate settlement process.

Settlement Timeline:
1. Initial Steps (2-3 months)
   • Probate filing
   • Asset inventory
   • Creditor notification

2. Mid-term Tasks (4-6 months)
   • Asset valuation
   • Debt settlement
   • Tax filings

3. Final Phase (6-12 months)
   • Asset distribution
   • Account closures
   • Final accounting` },
          { id: 'future-planning', title: 'Future Financial Planning', content: `Adjusting financial plans for the future.

Planning Steps:
1. Review Current Situation
   • Income changes
   • Expense adjustments
   • Insurance needs

2. Update Financial Plans
   • Budget revisions
   • Investment strategy
   • Retirement planning

3. Legal Considerations
   • Update own will
   • Review beneficiaries
   • Power of attorney` }
        ]
      }
    }
  }
};

export default function Checklist() {
  const [selectedTask, setSelectedTask] = useState(null);
  const [completedTasks, setCompletedTasks] = useState(new Set());

  const toggleTaskCompletion = (taskId) => {
    const newCompletedTasks = new Set(completedTasks);
    if (newCompletedTasks.has(taskId)) {
      newCompletedTasks.delete(taskId);
    } else {
      newCompletedTasks.add(taskId);
    }
    setCompletedTasks(newCompletedTasks);
  };

  const calculateProgress = () => {
    let totalTasks = 0;
    let completedCount = 0;

    Object.values(checklistSections).forEach(section => {
      Object.values(section.tasks).forEach(category => {
        category.subtasks.forEach(task => {
          totalTasks++;
          if (completedTasks.has(task.id)) {
            completedCount++;
          }
        });
      });
    });

    return {
      percentage: totalTasks === 0 ? 0 : Math.round((completedCount / totalTasks) * 100),
      completed: completedCount,
      total: totalTasks
    };
  };

  const progress = calculateProgress();

  return (
    <div className="max-w-7xl mx-auto py-8 sm:px-6 lg:px-8">
      <div className="px-4 sm:px-0">
        <div className="mb-10 bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Task Checklist</h1>
          <p className="text-gray-600 mb-6">Track your progress through important tasks and responsibilities.</p>
          <div className="mt-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-700">
                Progress ({progress.completed}/{progress.total} tasks completed)
              </span>
              <span className="text-sm font-medium text-purple-600">{progress.percentage}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3">
              <div
                className="bg-purple-600 h-3 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${progress.percentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {Object.entries(checklistSections).map(([sectionKey, section]) => (
          <div key={sectionKey} className="mb-12 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">{section.title}</h2>
            {Object.entries(section.tasks).map(([categoryKey, category]) => (
              <div key={categoryKey} className="mb-8 last:mb-0">
                <h3 className="text-xl font-semibold text-purple-700 mb-4">{category.title}</h3>
                <div className="space-y-4">
                  {category.subtasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => toggleTaskCompletion(task.id)}
                          className={`w-6 h-6 rounded-md border-2 ${
                            completedTasks.has(task.id)
                              ? 'bg-purple-600 border-purple-600'
                              : 'border-gray-300 hover:border-purple-400'
                          } flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200`}
                        >
                          {completedTasks.has(task.id) && (
                            <CheckIcon className="w-4 h-4 text-white" />
                          )}
                        </button>
                        <span className={`text-gray-700 ${completedTasks.has(task.id) ? 'line-through text-gray-400' : ''}`}>
                          {task.title}
                        </span>
                      </div>
                      <button
                        onClick={() => setSelectedTask(task)}
                        className="flex items-center text-purple-600 hover:text-purple-700 text-sm font-medium px-3 py-1 rounded-md hover:bg-purple-50 transition-colors duration-200"
                      >
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}

        <Dialog
          open={selectedTask !== null}
          onClose={() => setSelectedTask(null)}
          className="fixed inset-0 z-10 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <Dialog.Overlay 
              className="fixed inset-0 bg-black transition-opacity duration-300 ease-in-out"
              style={{
                opacity: selectedTask ? '0.5' : '0',
              }}
            />

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div
              className={`inline-block align-bottom bg-white rounded-2xl px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all duration-300 ease-out sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-8 ${
                selectedTask
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              {selectedTask && (
                <>
                  <div className="absolute top-0 right-0 pt-4 pr-4">
                    <button
                      type="button"
                      className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      onClick={() => setSelectedTask(null)}
                    >
                      <span className="sr-only">Close</span>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                      <Dialog.Title as="h3" className="text-2xl leading-6 font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                        {selectedTask.title}
                      </Dialog.Title>
                      <div className="mt-6 space-y-8">
                        {selectedTask.content.split('\n\n').map((block, blockIndex) => {
                          if (block.includes(':')) {
                            const [heading, ...items] = block.split('\n');
                            return (
                              <div key={blockIndex} className="space-y-4">
                                <h4 className="text-lg font-semibold text-purple-700 mb-3">
                                  {heading.replace(':', '')}
                                </h4>
                                <ul className="list-none space-y-4 pl-4">
                                  {items.map((item, itemIndex) => {
                                    if (item.trim().startsWith('•')) {
                                      return (
                                        <li key={itemIndex} className="text-gray-600 flex items-start">
                                          <span className="text-purple-500 mr-3 text-lg">•</span>
                                          <span className="leading-relaxed">{item.trim().substring(1)}</span>
                                        </li>
                                      );
                                    }
                                    if (item.trim().match(/^\d+\./)) {
                                      return (
                                        <li key={itemIndex} className="flex items-start space-x-4 text-gray-600">
                                          <span className="font-semibold text-purple-600 min-w-[1.5rem] text-right">{item.split('.')[0]}.</span>
                                          <span className="leading-relaxed flex-1">{item.split('.').slice(1).join('.').trim()}</span>
                                        </li>
                                      );
                                    }
                                    return (
                                      <li key={itemIndex} className="text-gray-600 leading-relaxed">
                                        {item.trim()}
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            );
                          }
                          return (
                            <p key={blockIndex} className="text-gray-600 leading-relaxed">
                              {block}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 sm:mt-10">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center items-center rounded-xl border border-transparent shadow-sm px-6 py-3 bg-purple-600 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:text-sm transition-all duration-200 hover:shadow-lg"
                      onClick={() => setSelectedTask(null)}
                    >
                      Close
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
} 