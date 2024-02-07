import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
// import {ScrollView} from 'react-native-gesture-handler';

const Terms = () => {
  return (
    <View style={{padding: 10}}>
      <View style={{height: 40}}>
        <Text style={{fontFamily: 'Roboto-Bold', fontSize: 25, color: '#000'}}>
          Terms & Conditions
        </Text>
      </View>
      <ScrollView>
        <Text>
          Terms and conditions are a legal agreement between you and your app
          users that explain the rules, requirements, restrictions, and
          limitations that users must follow when using your app. Terms and
          conditions can help you protect your intellectual property, limit your
          liability, resolve disputes, and enforce your rules. If you need a
          demo terms and conditions for your app, you can use one of the online
          generators that can help you create a customized and compliant
          agreement in minutes. For example, you can use [Termly](^1^),
          [TermsFeed], or [App Privacy Policy Generator]. These tools will ask
          you some questions about your app and generate a terms and conditions
          based on your answers. Alternatively, you can also write your own
          terms and conditions by following some best practices and examples.
          You can find some useful resources and templates on [Termly](^2^) or
          [Privacy Policies]. Some of the key elements that you should include
          in your terms and conditions are: - Introduction: This section should
          introduce your app, your company, and the purpose of your terms and
          conditions. - Acceptance of the Terms: This section should state that
          by downloading, installing, or using your app, users agree to be bound
          by your terms and conditions. - License: This section should grant
          users a limited, non-exclusive, revocable, and non-transferable
          license to use your app for personal and non-commercial purposes,
          subject to your terms and conditions. - Restrictions: This section
          should list the prohibited uses of your app, such as modifying,
          copying, distributing, or reverse-engineering your app, or using it
          for illegal or harmful purposes. - Intellectual Property: This section
          should declare that you own or have the rights to all the content,
          features, and functionality of your app, and that users do not acquire
          any ownership or rights to your app or its content. - User Content:
          This section should define the user-generated content that users may
          upload, post, or share through your app, and the rights and
          responsibilities that you and users have over such content. - User
          Accounts: This section should explain how users can create, access,
          and manage their accounts on your app, and the security and privacy
          measures that you take to protect their accounts and information. -
          Payments and Refunds: This section should describe the payment
          methods, fees, subscriptions, and refunds that apply to your app, and
          the terms and conditions that govern them. - Termination: This section
          should specify the grounds and procedures for terminating or
          suspending user accounts or access to your app, and the consequences
          of such actions. - Disclaimer of Warranties: This section should
          disclaim any warranties or guarantees regarding the quality, accuracy,
          reliability, availability, or performance of your app, and state that
          users use your app at their own risk and discretion. - Limitation of
          Liability: This section should limit your liability for any damages,
          losses, or injuries that may arise from or relate to the use or
          inability to use your app, to the extent permitted by law. -
          Indemnification: This section should require users to indemnify,
          defend, and hold you harmless from any claims, liabilities, or
          expenses that may arise from or relate to their use or misuse of your
          app, or their breach of your terms and conditions. - Dispute
          Resolution: This section should outline the methods and venues for
          resolving any disputes, conflicts, or complaints that may arise from
          or relate to your app or your terms and conditions, such as
          arbitration, mediation, or litigation. - Governing Law: This section
          should state the laws and jurisdiction that apply to your app and your
          terms and conditions, and how they affect the rights and obligations
          of you and your users. - Changes to the Terms: This section should
          notify users about any changes or updates to your terms and
          conditions, and how you will inform them. - Contact Information: This
          section should provide your contact details, such as your email
          address, phone number, or physical address, for any questions or
          feedback regarding your app or your terms and conditions. I hope this
          helps you with creating a demo terms and conditions for your app. If
          you have any other questions, feel free to ask me. 😊 Source:
          Conversation with Bing, 2/4/2024 (1) Mobile App Terms and Conditions
          Sample & Template - Termly.
          https://termly.io/resources/templates/app-terms-and-conditions/. (2)
          Demo Terms of Use | ServiceNow.
          https://www.servicenow.com/demo-terms-of-use.html. (3) How to Write
          Terms and Conditions in 6 Easy Steps - Termly.
          https://termly.io/resources/guides/how-to-write-terms-and-conditions/.
        </Text>
      </ScrollView>
    </View>
  );
};

export default Terms;

const styles = StyleSheet.create({});
