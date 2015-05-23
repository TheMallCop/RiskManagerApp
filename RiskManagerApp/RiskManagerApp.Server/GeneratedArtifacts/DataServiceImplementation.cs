﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using global::System.Linq;

namespace LightSwitchApplication.Implementation
{
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public class ApplicationDataDataService
        : global::Microsoft.LightSwitch.ServerGenerated.Implementation.DataService<global::LightSwitchApplication.Implementation.ApplicationData>
    {
    
        public ApplicationDataDataService() : base()
        {
        }
    
        protected override global::Microsoft.LightSwitch.IDataService GetDataService(global::Microsoft.LightSwitch.IDataWorkspace dataWorkspace)
        {
            return ((global::LightSwitchApplication.DataWorkspace)dataWorkspace).ApplicationData;
        }
    }
    
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public class ApplicationDataServiceImplementation
        : global::Microsoft.LightSwitch.ServerGenerated.Implementation.DataServiceImplementation<global::LightSwitchApplication.Implementation.ApplicationData>
    {
        public ApplicationDataServiceImplementation(global::Microsoft.LightSwitch.IDataService dataService) : base(dataService)
        {
        }
    
    #region Queries
        public global::System.Linq.IQueryable<global::LightSwitchApplication.Implementation.RiskAssessmentReview> MyRiskAssessmentReviews()
        {
            global::System.Linq.IQueryable<global::LightSwitchApplication.Implementation.RiskAssessmentReview> query;
            query = this.GetQuery<global::LightSwitchApplication.Implementation.RiskAssessmentReview>("RiskAssessmentReviews");
            return query;
        }
    
        public global::System.Linq.IQueryable<global::LightSwitchApplication.Implementation.RiskAssessmentReview> OverdueRiskAssessmentReviews()
        {
            global::System.Linq.IQueryable<global::LightSwitchApplication.Implementation.RiskAssessmentReview> query;
            global::System.DateTime today1 = global::Microsoft.LightSwitch.RelativeDates.Today();
            query = global::System.Linq.Queryable.Where(
                this.GetQuery<global::LightSwitchApplication.Implementation.RiskAssessmentReview>("RiskAssessmentReviews"),
                (r) => ((r.DateDue < today1) && (r.DateCompleted.HasValue == false)));
            return query;
        }
    
        public global::System.Linq.IQueryable<global::LightSwitchApplication.Implementation.RiskAssessment> MyRiskAssessments()
        {
            global::System.Linq.IQueryable<global::LightSwitchApplication.Implementation.RiskAssessment> query;
            query = this.GetQuery<global::LightSwitchApplication.Implementation.RiskAssessment>("RiskAssessments");
            return query;
        }
    
    #endregion

    #region Protected Methods
        protected override object CreateObject(global::System.Type type)
        {
            if (type == typeof(global::LightSwitchApplication.Implementation.Employee))
            {
                return new global::LightSwitchApplication.Implementation.Employee();
            }
            if (type == typeof(global::LightSwitchApplication.Implementation.HazardType))
            {
                return new global::LightSwitchApplication.Implementation.HazardType();
            }
            if (type == typeof(global::LightSwitchApplication.Implementation.RiskAssessmentHazard))
            {
                return new global::LightSwitchApplication.Implementation.RiskAssessmentHazard();
            }
            if (type == typeof(global::LightSwitchApplication.Implementation.RiskAssessmentReview))
            {
                return new global::LightSwitchApplication.Implementation.RiskAssessmentReview();
            }
            if (type == typeof(global::LightSwitchApplication.Implementation.RiskAssessment))
            {
                return new global::LightSwitchApplication.Implementation.RiskAssessment();
            }
            if (type == typeof(global::LightSwitchApplication.Implementation.RiskAssessmentStatus))
            {
                return new global::LightSwitchApplication.Implementation.RiskAssessmentStatus();
            }
            if (type == typeof(global::LightSwitchApplication.Implementation.RiskAssessor))
            {
                return new global::LightSwitchApplication.Implementation.RiskAssessor();
            }
            if (type == typeof(global::LightSwitchApplication.Implementation.RiskType))
            {
                return new global::LightSwitchApplication.Implementation.RiskType();
            }
    
            return base.CreateObject(type);
        }
    
        protected override global::LightSwitchApplication.Implementation.ApplicationData CreateObjectContext()
        {
            string assemblyName = global::System.Reflection.Assembly.GetExecutingAssembly().GetName().Name;
            return new global::LightSwitchApplication.Implementation.ApplicationData(this.GetEntityConnectionString(
                "_IntrinsicData",
                "res://" + assemblyName + "/ApplicationData.csdl|res://" + assemblyName + "/ApplicationData.ssdl|res://" + assemblyName + "/ApplicationData.msl",
                "System.Data.SqlClient",
                true));
        }
    
        protected override global::Microsoft.LightSwitch.Internal.IEntityImplementation CreateEntityImplementation<T>()
        {
            if (typeof(T) == typeof(global::LightSwitchApplication.Employee))
            {
                return new global::LightSwitchApplication.Implementation.Employee();
            }
            if (typeof(T) == typeof(global::LightSwitchApplication.HazardType))
            {
                return new global::LightSwitchApplication.Implementation.HazardType();
            }
            if (typeof(T) == typeof(global::LightSwitchApplication.RiskAssessmentHazard))
            {
                return new global::LightSwitchApplication.Implementation.RiskAssessmentHazard();
            }
            if (typeof(T) == typeof(global::LightSwitchApplication.RiskAssessmentReview))
            {
                return new global::LightSwitchApplication.Implementation.RiskAssessmentReview();
            }
            if (typeof(T) == typeof(global::LightSwitchApplication.RiskAssessment))
            {
                return new global::LightSwitchApplication.Implementation.RiskAssessment();
            }
            if (typeof(T) == typeof(global::LightSwitchApplication.RiskAssessmentStatus))
            {
                return new global::LightSwitchApplication.Implementation.RiskAssessmentStatus();
            }
            if (typeof(T) == typeof(global::LightSwitchApplication.RiskAssessor))
            {
                return new global::LightSwitchApplication.Implementation.RiskAssessor();
            }
            if (typeof(T) == typeof(global::LightSwitchApplication.RiskType))
            {
                return new global::LightSwitchApplication.Implementation.RiskType();
            }
            return null;
        }
    
    #endregion
    
    }
    
    #region DataServiceImplementationFactory
    [global::System.ComponentModel.Composition.PartCreationPolicy(global::System.ComponentModel.Composition.CreationPolicy.Shared)]
    [global::System.ComponentModel.Composition.Export(typeof(global::Microsoft.LightSwitch.Internal.IDataServiceFactory))]
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public class __DataServiceFactory :
        global::Microsoft.LightSwitch.ServerGenerated.Implementation.DataServiceFactory
    {
    
        protected override global::Microsoft.LightSwitch.IDataService CreateDataService(global::System.Type dataServiceType)
        {
            if (dataServiceType == typeof(global::LightSwitchApplication.ApplicationDataService))
            {
                return new global::LightSwitchApplication.ApplicationDataService();
            }
            return base.CreateDataService(dataServiceType);
        }
    
        protected override global::Microsoft.LightSwitch.Internal.IDataServiceImplementation CreateDataServiceImplementation<TDataService>(TDataService dataService)
        {
            if (typeof(TDataService) == typeof(global::LightSwitchApplication.ApplicationDataService))
            {
                return new global::LightSwitchApplication.Implementation.ApplicationDataServiceImplementation(dataService);
            }
            return base.CreateDataServiceImplementation(dataService);
        }
    }
    #endregion
    
    [global::System.ComponentModel.Composition.PartCreationPolicy(global::System.ComponentModel.Composition.CreationPolicy.Shared)]
    [global::System.ComponentModel.Composition.Export(typeof(global::Microsoft.LightSwitch.Internal.ITypeMappingProvider))]
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public class __TypeMapping
        : global::Microsoft.LightSwitch.Internal.ITypeMappingProvider
    {
        global::System.Type global::Microsoft.LightSwitch.Internal.ITypeMappingProvider.GetImplementationType(global::System.Type definitionType)
        {
            if (typeof(global::LightSwitchApplication.Employee) == definitionType)
            {
                return typeof(global::LightSwitchApplication.Implementation.Employee);
            }
            if (typeof(global::LightSwitchApplication.HazardType) == definitionType)
            {
                return typeof(global::LightSwitchApplication.Implementation.HazardType);
            }
            if (typeof(global::LightSwitchApplication.RiskAssessmentHazard) == definitionType)
            {
                return typeof(global::LightSwitchApplication.Implementation.RiskAssessmentHazard);
            }
            if (typeof(global::LightSwitchApplication.RiskAssessmentReview) == definitionType)
            {
                return typeof(global::LightSwitchApplication.Implementation.RiskAssessmentReview);
            }
            if (typeof(global::LightSwitchApplication.RiskAssessment) == definitionType)
            {
                return typeof(global::LightSwitchApplication.Implementation.RiskAssessment);
            }
            if (typeof(global::LightSwitchApplication.RiskAssessmentStatus) == definitionType)
            {
                return typeof(global::LightSwitchApplication.Implementation.RiskAssessmentStatus);
            }
            if (typeof(global::LightSwitchApplication.RiskAssessor) == definitionType)
            {
                return typeof(global::LightSwitchApplication.Implementation.RiskAssessor);
            }
            if (typeof(global::LightSwitchApplication.RiskType) == definitionType)
            {
                return typeof(global::LightSwitchApplication.Implementation.RiskType);
            }
            return null;
        }
    }
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public partial class Employee :
        global::LightSwitchApplication.Employee.DetailsClass.IImplementation,
        global::Microsoft.LightSwitch.Internal.ICreatedModifiedPropertiesImplementation
    
    {
    
        global::Microsoft.LightSwitch.Internal.IEntityImplementation global::LightSwitchApplication.Employee.DetailsClass.IImplementation.RiskAssessor
        {
            get
            {
                return this.RiskAssessor;
            }
            set
            {
                this.RiskAssessor = (global::LightSwitchApplication.Implementation.RiskAssessor)value;
                if (this.__host != null)
                {
                    this.__host.RaisePropertyChanged("RiskAssessor");
                }
            }
        }
        
        #region IEntityImplementation Members
        private global::Microsoft.LightSwitch.Internal.IEntityImplementationHost __host;
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementationHost global::Microsoft.LightSwitch.Internal.IEntityImplementation.Host
        {
            get
            {
                return this.__host;
            }
        }
        
        void global::Microsoft.LightSwitch.Internal.IEntityImplementation.Initialize(global::Microsoft.LightSwitch.Internal.IEntityImplementationHost host)
        {
            this.__host = host;
        }
        
        protected override void OnPropertyChanged(string propertyName)
        {
            base.OnPropertyChanged(propertyName);
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged(propertyName);
            }
        }
        #endregion
    }
    
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public partial class HazardType :
        global::LightSwitchApplication.HazardType.DetailsClass.IImplementation,
        global::Microsoft.LightSwitch.Internal.ICreatedModifiedPropertiesImplementation
    
    {
    
        global::System.Collections.IEnumerable global::LightSwitchApplication.HazardType.DetailsClass.IImplementation.RiskAssessmentHazards
        {
            get
            {
                return this.RiskAssessmentHazards;
            }
        }
        
        #region IEntityImplementation Members
        private global::Microsoft.LightSwitch.Internal.IEntityImplementationHost __host;
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementationHost global::Microsoft.LightSwitch.Internal.IEntityImplementation.Host
        {
            get
            {
                return this.__host;
            }
        }
        
        void global::Microsoft.LightSwitch.Internal.IEntityImplementation.Initialize(global::Microsoft.LightSwitch.Internal.IEntityImplementationHost host)
        {
            this.__host = host;
        }
        
        protected override void OnPropertyChanged(string propertyName)
        {
            base.OnPropertyChanged(propertyName);
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged(propertyName);
            }
        }
        #endregion
    }
    
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public partial class RiskAssessmentHazard :
        global::LightSwitchApplication.RiskAssessmentHazard.DetailsClass.IImplementation,
        global::Microsoft.LightSwitch.Internal.ICreatedModifiedPropertiesImplementation
    
    {
    
        global::Microsoft.LightSwitch.Internal.IEntityImplementation global::LightSwitchApplication.RiskAssessmentHazard.DetailsClass.IImplementation.HazardType
        {
            get
            {
                return this.HazardType;
            }
            set
            {
                this.HazardType = (global::LightSwitchApplication.Implementation.HazardType)value;
                if (this.__host != null)
                {
                    this.__host.RaisePropertyChanged("HazardType");
                }
            }
        }
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementation global::LightSwitchApplication.RiskAssessmentHazard.DetailsClass.IImplementation.RiskAssessment
        {
            get
            {
                return this.RiskAssessment;
            }
            set
            {
                this.RiskAssessment = (global::LightSwitchApplication.Implementation.RiskAssessment)value;
                if (this.__host != null)
                {
                    this.__host.RaisePropertyChanged("RiskAssessment");
                }
            }
        }
        
        partial void OnHazardType_RiskAssessmentHazardChanged()
        {
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged("HazardType");
            }
        }
        
        partial void OnRiskAssessmentHazard_RiskAssessmentChanged()
        {
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged("RiskAssessment");
            }
        }
        
        #region IEntityImplementation Members
        private global::Microsoft.LightSwitch.Internal.IEntityImplementationHost __host;
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementationHost global::Microsoft.LightSwitch.Internal.IEntityImplementation.Host
        {
            get
            {
                return this.__host;
            }
        }
        
        void global::Microsoft.LightSwitch.Internal.IEntityImplementation.Initialize(global::Microsoft.LightSwitch.Internal.IEntityImplementationHost host)
        {
            this.__host = host;
        }
        
        protected override void OnPropertyChanged(string propertyName)
        {
            base.OnPropertyChanged(propertyName);
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged(propertyName);
            }
        }
        #endregion
    }
    
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public partial class RiskAssessmentReview :
        global::LightSwitchApplication.RiskAssessmentReview.DetailsClass.IImplementation,
        global::Microsoft.LightSwitch.Internal.ICreatedModifiedPropertiesImplementation
    
    {
    
        global::Microsoft.LightSwitch.Internal.IEntityImplementation global::LightSwitchApplication.RiskAssessmentReview.DetailsClass.IImplementation.RiskAssessmentReviewer
        {
            get
            {
                return this.RiskAssessmentReviewer;
            }
            set
            {
                this.RiskAssessmentReviewer = (global::LightSwitchApplication.Implementation.RiskAssessor)value;
                if (this.__host != null)
                {
                    this.__host.RaisePropertyChanged("RiskAssessmentReviewer");
                }
            }
        }
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementation global::LightSwitchApplication.RiskAssessmentReview.DetailsClass.IImplementation.RiskAssessment
        {
            get
            {
                return this.RiskAssessment;
            }
            set
            {
                this.RiskAssessment = (global::LightSwitchApplication.Implementation.RiskAssessment)value;
                if (this.__host != null)
                {
                    this.__host.RaisePropertyChanged("RiskAssessment");
                }
            }
        }
        
        partial void OnRiskAssessmentReview_RiskAssessorChanged()
        {
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged("RiskAssessmentReviewer");
            }
        }
        
        partial void OnRiskAssessmentReview_RiskAssessmentChanged()
        {
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged("RiskAssessment");
            }
        }
        
        #region IEntityImplementation Members
        private global::Microsoft.LightSwitch.Internal.IEntityImplementationHost __host;
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementationHost global::Microsoft.LightSwitch.Internal.IEntityImplementation.Host
        {
            get
            {
                return this.__host;
            }
        }
        
        void global::Microsoft.LightSwitch.Internal.IEntityImplementation.Initialize(global::Microsoft.LightSwitch.Internal.IEntityImplementationHost host)
        {
            this.__host = host;
        }
        
        protected override void OnPropertyChanged(string propertyName)
        {
            base.OnPropertyChanged(propertyName);
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged(propertyName);
            }
        }
        #endregion
    }
    
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public partial class RiskAssessment :
        global::LightSwitchApplication.RiskAssessment.DetailsClass.IImplementation,
        global::Microsoft.LightSwitch.Internal.ICreatedModifiedPropertiesImplementation
    
    {
    
        global::Microsoft.LightSwitch.Internal.IEntityImplementation global::LightSwitchApplication.RiskAssessment.DetailsClass.IImplementation.RiskType
        {
            get
            {
                return this.RiskType;
            }
            set
            {
                this.RiskType = (global::LightSwitchApplication.Implementation.RiskType)value;
                if (this.__host != null)
                {
                    this.__host.RaisePropertyChanged("RiskType");
                }
            }
        }
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementation global::LightSwitchApplication.RiskAssessment.DetailsClass.IImplementation.RiskAssessor
        {
            get
            {
                return this.RiskAssessor;
            }
            set
            {
                this.RiskAssessor = (global::LightSwitchApplication.Implementation.RiskAssessor)value;
                if (this.__host != null)
                {
                    this.__host.RaisePropertyChanged("RiskAssessor");
                }
            }
        }
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementation global::LightSwitchApplication.RiskAssessment.DetailsClass.IImplementation.RiskAssessmentStatus
        {
            get
            {
                return this.RiskAssessmentStatus;
            }
            set
            {
                this.RiskAssessmentStatus = (global::LightSwitchApplication.Implementation.RiskAssessmentStatus)value;
                if (this.__host != null)
                {
                    this.__host.RaisePropertyChanged("RiskAssessmentStatus");
                }
            }
        }
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementation global::LightSwitchApplication.RiskAssessment.DetailsClass.IImplementation.RiskAssessmentApprover
        {
            get
            {
                return this.RiskAssessmentApprover;
            }
            set
            {
                this.RiskAssessmentApprover = (global::LightSwitchApplication.Implementation.RiskAssessor)value;
                if (this.__host != null)
                {
                    this.__host.RaisePropertyChanged("RiskAssessmentApprover");
                }
            }
        }
        
        global::System.Collections.IEnumerable global::LightSwitchApplication.RiskAssessment.DetailsClass.IImplementation.RiskAssessmentReviews
        {
            get
            {
                return this.RiskAssessmentReviews;
            }
        }
        
        global::System.Collections.IEnumerable global::LightSwitchApplication.RiskAssessment.DetailsClass.IImplementation.RiskAssessmentHazards
        {
            get
            {
                return this.RiskAssessmentHazards;
            }
        }
        
        partial void OnRiskType_RiskAssessmentChanged()
        {
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged("RiskType");
            }
        }
        
        partial void OnRiskAssessment_RiskAssessorChanged()
        {
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged("RiskAssessor");
            }
        }
        
        partial void OnRiskAssessmentStatus_RiskAssessmentChanged()
        {
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged("RiskAssessmentStatus");
            }
        }
        
        partial void OnRiskAssessment_RiskAssessor1Changed()
        {
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged("RiskAssessmentApprover");
            }
        }
        
        #region IEntityImplementation Members
        private global::Microsoft.LightSwitch.Internal.IEntityImplementationHost __host;
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementationHost global::Microsoft.LightSwitch.Internal.IEntityImplementation.Host
        {
            get
            {
                return this.__host;
            }
        }
        
        void global::Microsoft.LightSwitch.Internal.IEntityImplementation.Initialize(global::Microsoft.LightSwitch.Internal.IEntityImplementationHost host)
        {
            this.__host = host;
        }
        
        protected override void OnPropertyChanged(string propertyName)
        {
            base.OnPropertyChanged(propertyName);
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged(propertyName);
            }
        }
        #endregion
    }
    
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public partial class RiskAssessmentStatus :
        global::LightSwitchApplication.RiskAssessmentStatus.DetailsClass.IImplementation,
        global::Microsoft.LightSwitch.Internal.ICreatedModifiedPropertiesImplementation
    
    {
    
        global::System.Collections.IEnumerable global::LightSwitchApplication.RiskAssessmentStatus.DetailsClass.IImplementation.RiskAssessments
        {
            get
            {
                return this.RiskAssessments;
            }
        }
        
        #region IEntityImplementation Members
        private global::Microsoft.LightSwitch.Internal.IEntityImplementationHost __host;
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementationHost global::Microsoft.LightSwitch.Internal.IEntityImplementation.Host
        {
            get
            {
                return this.__host;
            }
        }
        
        void global::Microsoft.LightSwitch.Internal.IEntityImplementation.Initialize(global::Microsoft.LightSwitch.Internal.IEntityImplementationHost host)
        {
            this.__host = host;
        }
        
        protected override void OnPropertyChanged(string propertyName)
        {
            base.OnPropertyChanged(propertyName);
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged(propertyName);
            }
        }
        #endregion
    }
    
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public partial class RiskAssessor :
        global::LightSwitchApplication.RiskAssessor.DetailsClass.IImplementation,
        global::Microsoft.LightSwitch.Internal.ICreatedModifiedPropertiesImplementation
    
    {
    
        global::Microsoft.LightSwitch.Internal.IEntityImplementation global::LightSwitchApplication.RiskAssessor.DetailsClass.IImplementation.Employee
        {
            get
            {
                return this.Employee;
            }
            set
            {
                this.Employee = (global::LightSwitchApplication.Implementation.Employee)value;
                if (this.__host != null)
                {
                    this.__host.RaisePropertyChanged("Employee");
                }
            }
        }
        
        global::System.Collections.IEnumerable global::LightSwitchApplication.RiskAssessor.DetailsClass.IImplementation.RiskAssessments_RiskAssessor
        {
            get
            {
                return this.RiskAssessments_RiskAssessor;
            }
        }
        
        global::System.Collections.IEnumerable global::LightSwitchApplication.RiskAssessor.DetailsClass.IImplementation.RiskAssessments_Approver
        {
            get
            {
                return this.RiskAssessments_Approver;
            }
        }
        
        global::System.Collections.IEnumerable global::LightSwitchApplication.RiskAssessor.DetailsClass.IImplementation.RiskAssessmentReviews
        {
            get
            {
                return this.RiskAssessmentReviews;
            }
        }
        
        partial void OnIdChanged()
        {
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged("Employee");
            }
        }
        
        #region IEntityImplementation Members
        private global::Microsoft.LightSwitch.Internal.IEntityImplementationHost __host;
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementationHost global::Microsoft.LightSwitch.Internal.IEntityImplementation.Host
        {
            get
            {
                return this.__host;
            }
        }
        
        void global::Microsoft.LightSwitch.Internal.IEntityImplementation.Initialize(global::Microsoft.LightSwitch.Internal.IEntityImplementationHost host)
        {
            this.__host = host;
        }
        
        protected override void OnPropertyChanged(string propertyName)
        {
            base.OnPropertyChanged(propertyName);
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged(propertyName);
            }
        }
        #endregion
    }
    
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public partial class RiskType :
        global::LightSwitchApplication.RiskType.DetailsClass.IImplementation,
        global::Microsoft.LightSwitch.Internal.ICreatedModifiedPropertiesImplementation
    
    {
    
        global::System.Collections.IEnumerable global::LightSwitchApplication.RiskType.DetailsClass.IImplementation.RiskAssessments
        {
            get
            {
                return this.RiskAssessments;
            }
        }
        
        #region IEntityImplementation Members
        private global::Microsoft.LightSwitch.Internal.IEntityImplementationHost __host;
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementationHost global::Microsoft.LightSwitch.Internal.IEntityImplementation.Host
        {
            get
            {
                return this.__host;
            }
        }
        
        void global::Microsoft.LightSwitch.Internal.IEntityImplementation.Initialize(global::Microsoft.LightSwitch.Internal.IEntityImplementationHost host)
        {
            this.__host = host;
        }
        
        protected override void OnPropertyChanged(string propertyName)
        {
            base.OnPropertyChanged(propertyName);
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged(propertyName);
            }
        }
        #endregion
    }
    
}
